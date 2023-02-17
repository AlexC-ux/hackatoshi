import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import axios from 'axios';
import { NaturalLangPr } from '../nlp';
import { Server, Socket } from 'socket.io';
import { Emits, Events } from './events';

@WebSocketGateway()
export class SocketsGateway
  implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  public server: Server;

  handleConnection(@ConnectedSocket() client: Socket) {


    //Ответ на вопрос
    client.on(Events.askText.toString(), (text, ack) => {
      if (ack) {
        ack(NaturalLangPr.getResult(text));
      }
    })

    //Получение сведений о пользователе
    client.on(Events.getMe.toString(), (text, ack) => {
      var config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://grants.myrosmol.ru/api/profile/personal',
        headers: {
          'Authorization': `Bearer ${process.env.api_token}`
        }
      };

      if (ack) {
        axios(config)
          .then(function (response) {

            ack(JSON.stringify(response.data))

          })
          .catch(function (error) {
            console.log(error);
          });
      }
    })

    //Получение грантов
    client.on(Events.getGrants.toString(), (text, ack) => {
      if (ack) {
        var config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'https://grants.myrosmol.ru/api/events',
          headers: {
            'Authorization': `Bearer ${process.env.api_token}`
          }
        };

        axios(config)
          .then(function (response) {
            ack(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    })

    //Получение инфо о гранте по id
    client.on(Events.getGrantInfo.toString(), (grantInfo, ack) => {
      if (grantInfo.id) {
        if (ack) {
          var axios = require('axios');

          var config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://grants.myrosmol.ru/api/events/' + grantInfo.id,
            headers: {
              'Authorization': `Bearer ${process.env.api_token}`
            }
          };

          axios(config)
            .then(function (response) {
              ack(JSON.stringify(response.data));
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      } else {
        ack("Не указан id")
      }
    })

    //Получение помогалок
    client.on(Events.getKnowledge.toString(), (text, ack) => {
      var config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://grants.myrosmol.ru/api/knowledge',
        headers: {
          'Authorization': `Bearer ${process.env.api_token}`
        }
      };

      if (ack) {
        axios(config)
          .then(function (response) {
            ack(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
      }

    })


  }

  handleDisconnect(@ConnectedSocket() client: any) {
    // console.log(
    //   `user ${client.user.id} with socket ${client.id} with device ${client.handshake?.query?.deviceId} DISCONNECTED`,
    // );
  }
}

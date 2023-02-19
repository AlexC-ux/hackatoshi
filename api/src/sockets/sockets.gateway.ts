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
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();
const nodemailer = require('nodemailer');

@WebSocketGateway()
export class SocketsGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  public server: Server;

  handleConnection(@ConnectedSocket() client: Socket) {
    //Через n сек давит на пузо
    setTimeout(() => {
      client.emit(
        Emits.lowActive.toString(),
        'У нас подготовлено много интересных грантовых проектов! Желаете ознакомиться?',
      );
    }, 10000);

    //Через n сек если юзер на странице грантов - давит на пузо
    client.on(Events.locationChanged.toString(), (location) => {
      setTimeout(() => {
        if (location.contains('grants.myrosmol.ru/events')) {
          client.emit(
            Emits.grantPage.toString(),
            'Интересный проект, не так ли? Давайте я помогу Вам с заполнением заявки на участие!',
          );
        }
      }, 6000);
    });

    //Ответ на вопрос
    client.on(Events.askText.toString(), (text, ack) => {
      if (ack) {
        console.log({ queried: text });
        ack(NaturalLangPr.getResult(text));

        async function main() {
          await prisma.users.update({
            where: {
              token: process.env.api_token,
            },
            data: {
              textQueries: {
                create: {
                  queryText: text,
                },
              },
            },
          });
        }
        main()
          .then(async () => {
            await prisma.$disconnect();
          })
          .catch(async (e) => {
            console.error(e);
            await prisma.$disconnect();
            process.exit(1);
          });
      }
    });

    //Получение сведений о пользователе
    client.on(Events.getMe.toString(), (text, ack) => {
      if (ack) {
        axios({
          method: 'get',
          maxBodyLength: Infinity,
          url: 'https://grants.myrosmol.ru/api/profile/personal',
          headers: {
            Authorization: `Bearer ${process.env.api_token}`,
          },
        })
          .then(function (response) {
            ack(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    });

    //Получение грантов
    client.on(Events.getGrants.toString(), (text, ack) => {
      if (ack) {
        axios({
          method: 'get',
          maxBodyLength: Infinity,
          url: 'https://grants.myrosmol.ru/api/events',
          headers: {
            Authorization: `Bearer ${process.env.api_token}`,
          },
        })
          .then(function (response) {
            ack(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    });

    //Получение инфо о гранте по id
    client.on(Events.getGrantInfo.toString(), (grantInfo, ack) => {
      if (grantInfo.id) {
        if (ack) {
          axios({
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://grants.myrosmol.ru/api/events/' + grantInfo.id,
            headers: {
              Authorization: `Bearer ${process.env.api_token}`,
            },
          })
            .then(function (response) {
              ack(JSON.stringify(response.data));
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      } else {
        ack('Не указан id');
      }
    });

    //Получение помогалок
    client.on(Events.getKnowledge.toString(), (text, ack) => {
      if (ack) {
        axios({
          method: 'get',
          maxBodyLength: Infinity,
          url: 'https://grants.myrosmol.ru/api/knowledge',
          headers: {
            Authorization: `Bearer ${process.env.api_token}`,
          },
        })
          .then(function (response) {
            ack(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    });

    //отправка почты
    client.on(Events.sendMail, (text, ack) => {
      if (text.subject && text.text) {
        main()
          .then(async () => {
            await prisma.$disconnect();
          })
          .catch(async (e) => {
            console.error(e);
            await prisma.$disconnect();
            process.exit(1);
          });
      } else {
        ack('Not text or subject');
      }

      async function main() {
        const testAccount = await nodemailer.createTestAccount();
        const transporter = nodemailer.createTransport({
          host: 'smtp.ethereal.email',
          port: 587,
          secure: false,
          auth: {
            user: testAccount.user,
            pass: testAccount.pass,
          },
        });

        prisma.users
          .findFirstOrThrow({
            where: {
              token: process.env.api_token,
            },
          })
          .then(async (user) => {
            const info = await transporter.sendMail({
              from: '"ХАКАТОШИ ^.^" <foo@example.com>',
              to: user.email,
              subject: text.subject,
              text: text.text,
              html: `<p>${text.text}</p>`,
            });
            if (ack) {
              ack({ info, url: nodemailer.getTestMessageUrl(info) });
            }
          });
      }
    });
  }

  handleDisconnect(@ConnectedSocket() client: any) {
    // console.log(
    //   `user ${client.user.id} with socket ${client.id} with device ${client.handshake?.query?.deviceId} DISCONNECTED`,
    // );
  }
}

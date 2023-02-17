"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketsGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const axios_1 = require("axios");
const nlp_1 = require("../nlp");
const socket_io_1 = require("socket.io");
const events_1 = require("./events");
let SocketsGateway = class SocketsGateway {
    handleConnection(client) {
        client.on(events_1.Events.askText.toString(), (text, ack) => {
            if (ack) {
                ack(nlp_1.NaturalLangPr.getResult(text));
            }
        });
        client.on(events_1.Events.getMe.toString(), (text, ack) => {
            var config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'https://grants.myrosmol.ru/api/profile/personal',
                headers: {
                    'Authorization': `Bearer ${process.env.api_token}`
                }
            };
            if (ack) {
                (0, axios_1.default)(config)
                    .then(function (response) {
                    ack(JSON.stringify(response.data));
                })
                    .catch(function (error) {
                    console.log(error);
                });
            }
        });
        client.on(events_1.Events.getGrants.toString(), (text, ack) => {
            if (ack) {
                var config = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: 'https://grants.myrosmol.ru/api/events',
                    headers: {
                        'Authorization': `Bearer ${process.env.api_token}`
                    }
                };
                (0, axios_1.default)(config)
                    .then(function (response) {
                    ack(JSON.stringify(response.data));
                })
                    .catch(function (error) {
                    console.log(error);
                });
            }
        });
        client.on(events_1.Events.getGrantInfo.toString(), (grantInfo, ack) => {
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
            }
            else {
                ack("Не указан id");
            }
        });
    }
    handleDisconnect(client) {
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], SocketsGateway.prototype, "server", void 0);
__decorate([
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], SocketsGateway.prototype, "handleConnection", null);
__decorate([
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SocketsGateway.prototype, "handleDisconnect", null);
SocketsGateway = __decorate([
    (0, websockets_1.WebSocketGateway)()
], SocketsGateway);
exports.SocketsGateway = SocketsGateway;
//# sourceMappingURL=sockets.gateway.js.map
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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const nodemailer = require('nodemailer');
let SocketsGateway = class SocketsGateway {
    handleConnection(client) {
        setTimeout(() => {
            client.emit(events_1.Emits.lowActive.toString(), 'У нас подготовлено много интересных грантовых проектов! Желаете ознакомиться?');
        }, 10000);
        client.on(events_1.Events.locationChanged.toString(), (location) => {
            setTimeout(() => {
                if (location.contains('grants.myrosmol.ru/events')) {
                    client.emit(events_1.Emits.grantPage.toString(), 'Интересный проект, не так ли? Давайте я помогу Вам с заполнением заявки на участие!');
                }
            }, 6000);
        });
        client.on(events_1.Events.askText.toString(), (text, ack) => {
            if (ack) {
                console.log({ queried: text });
                ack(nlp_1.NaturalLangPr.getResult(text));
            }
        });
        client.on(events_1.Events.getMe.toString(), (text, ack) => {
            if (ack) {
                (0, axios_1.default)({
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
        client.on(events_1.Events.getGrants.toString(), (text, ack) => {
            if (ack) {
                (0, axios_1.default)({
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
        client.on(events_1.Events.getGrantInfo.toString(), (grantInfo, ack) => {
            if (grantInfo.id) {
                if (ack) {
                    (0, axios_1.default)({
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
            }
            else {
                ack('Не указан id');
            }
        });
        client.on(events_1.Events.getKnowledge.toString(), (text, ack) => {
            if (ack) {
                (0, axios_1.default)({
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
        client.on(events_1.Events.sendMail, (text, ack) => {
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
            }
            else {
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
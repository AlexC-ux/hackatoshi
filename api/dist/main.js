"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const authenticated_socket_adapter_1 = require("./sockets/authenticated-socket.adapter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useWebSocketAdapter(new authenticated_socket_adapter_1.AuthenticatedSocketAdapter(app));
    await app.listen(4000);
}
bootstrap();
//# sourceMappingURL=main.js.map
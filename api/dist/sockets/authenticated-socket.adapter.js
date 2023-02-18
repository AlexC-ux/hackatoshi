"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticatedSocketAdapter = void 0;
const platform_socket_io_1 = require("@nestjs/platform-socket.io");
class AuthenticatedSocketAdapter extends platform_socket_io_1.IoAdapter {
    constructor(app) {
        super(app);
        this.app = app;
    }
    createIOServer(port, options) {
        const server = super.createIOServer(port, {
            cors: {
                origin: "http://localhost:3000",
                methods: ["GET", "POST"],
                allowedHeaders: ["my-custom-header"],
                credentials: true
            }
        });
        server.use(async (socket, next) => {
            try {
                socket.user = {};
                return next();
            }
            catch (error) {
                return next(new Error('Authentication error'));
            }
        });
        return server;
    }
}
exports.AuthenticatedSocketAdapter = AuthenticatedSocketAdapter;
//# sourceMappingURL=authenticated-socket.adapter.js.map
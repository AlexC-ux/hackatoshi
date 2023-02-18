import { INestApplicationContext } from '@nestjs/common';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { Server } from 'socket.io';

export class AuthenticatedSocketAdapter extends IoAdapter {
  // private readonly authService:AuthService;
  constructor(private app: INestApplicationContext) {
    super(app);
    // this.authService = this.app.get(AuthService);
  }

  createIOServer(port: number, options?: any) {
    const server: Server = super.createIOServer(port, {
      cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
      }
    });

    server.use(async (socket: any, next) => {

      try {
        socket.user = {};
        // const user = await this.authService.authenticateToken(token);
        // socket.user = user;
        return next();
      } catch (error: any) {
        return next(new Error('Authentication error'));
      }
    });
    return server;
  }
}

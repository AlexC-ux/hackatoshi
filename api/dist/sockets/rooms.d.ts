import { Server } from 'socket.io';
export declare function getUserDeviceRoom(userId: string, deviceId: string): string;
export declare function sendToUserDevice(server: Server, userId: string, deviceId: string, event: string, payload: any): void;
export declare function startTimerForUserDevice(server: Server, userId: string, deviceId: string, dur: number): void;
export declare function stopTimerForUserDevice(userId: string, deviceId: string): void;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stopTimerForUserDevice = exports.startTimerForUserDevice = exports.sendToUserDevice = exports.getUserDeviceRoom = void 0;
var userTimers = {};
function getUserDeviceRoom(userId, deviceId) {
    return `user:${userId}-device:${deviceId}`;
}
exports.getUserDeviceRoom = getUserDeviceRoom;
function sendToUserDevice(server, userId, deviceId, event, payload) {
    server.to(getUserDeviceRoom(userId, deviceId)).emit(event, payload);
}
exports.sendToUserDevice = sendToUserDevice;
function startTimerForUserDevice(server, userId, deviceId, dur) {
    var counter = dur;
    var timer = setInterval(function () {
        console.log(`counting ${counter}`);
        sendToUserDevice(server, userId, deviceId, TimerEvents.tick.toString(), {
            timer: counter,
        });
        if (counter > 0) {
            counter--;
        }
        else {
            console.log(`user ${userId} has a timeout`);
        }
    }, 1000);
    userTimers[userId + deviceId] = timer;
}
exports.startTimerForUserDevice = startTimerForUserDevice;
function stopTimerForUserDevice(userId, deviceId) {
    clearInterval(userTimers[userId + deviceId]);
    delete userTimers[userId + deviceId];
}
exports.stopTimerForUserDevice = stopTimerForUserDevice;
//# sourceMappingURL=rooms.js.map
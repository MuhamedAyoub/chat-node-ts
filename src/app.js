"use strict";
exports.__esModule = true;
// @ts-ignore
var express_1 = require("express");
var http = require("http");
var socket_io_1 = require("socket.io");
var dirname_1 = require("./utls/dirname");
// Create Server
var app = (0, express_1["default"])();
var server = http.createServer(app);
// Apply middleware
app.use(express_1["default"].json());
app.use(express_1["default"].static());
var io = new socket_io_1.Server(app);
io.on('connection', function (socket) {
    socket.emit("noArg");
});
var PORT = 3000 || process.env.PORT;
server.listen(PORT, function () {
    console.log('SERVER RUNNING ON PORT ', PORT);
    console.log(dirname_1.__dirname);
});

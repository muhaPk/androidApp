const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const authRouter = require('./routes/auth.routs');
const groupRouter = require('./routes/group.routs');
const messageRouter = require('./routes/message.routs');
const fileRouter = require('./routes/file.routs');
const fileUpload = require('express-fileupload');

const app = express();
const http = require('http');
const server = http.createServer(app);

const {Server} = require('socket.io');
const io = new Server(server);

const Port = config.get('serverPort');

// const corsMiddleware = require('./middleware/cors.middleware')
// const cors = require('cors');

// app.use(cors({origin: true, credentials: true}));
// app.use(corsMiddleware);

app.use(fileUpload({}))
app.use(express.json())
app.use("/api/auth", authRouter)
app.use("/api/group", groupRouter)
app.use("/api/message", messageRouter)
app.use("/api/file", fileRouter)

const start = async () => {
    try {

        io.on('connect', (socket) => {

            socket.on("newMessage",  groupId => {

                socket.join(groupId);
                socket.broadcast.to(groupId).emit('updateMessages', groupId);

                // socket.emit('updateMessages', groupId);
            } );

            io.on('disconnect', () => {
                console.log('disconnect');
            })
        });

        await mongoose.set("strictQuery", false)
        await mongoose.connect(config.get('dbUrl'))

        server.listen(Port, () => {
            console.log('server started', Port)
        })

    } catch (e) {
        console.log("start error: ", e);
    }
}

start()

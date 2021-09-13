const user = require("./model/user.model");

const io = require("socket.io")(4000, {
    cors: {
      origin: "http://localhost:3000",
    },
  });

let users = []
let rooms = []

const addUser = (userId , socketId) =>{
    !users.some((user)=> user.userId === userId) && 
    users.push({userId,socketId})
}

const removeUser = (socketId) =>{
    users= users.filter((user)=>user.socketId !== socketId);
}

const getUser = (userId) => {
    return users.find((user)=> user.userId === userId)
}


io.on("connection" ,(socket)=>{
    //when connect 
    console.log("a user connected");
    //take userid and socket id from user

    socket.on("addUser",(userId)=>{
        addUser(userId, socket.id);
        io.emit("getUsers",users);
    });

    //send and get message
    socket.on("sendMessage", ({senderId, receiverId, text})=>{
        const user = getUser(receiverId);
        io.to(user.socketId).emit("getMessage",{
            senderId,
            text
        })
    });

    //when disconnect
    socket.on("disconnect",()=>{
        console.log("a user disconnected!");
        removeUser(socket.id);
        io.emit("getUsers", users);
    })
})

//   io.on('connection', (socket) => {
//     Msg.find().then(result => {
//         socket.emit('output-messages', result)
//     })
//     console.log('a user connected');
//     socket.emit('message', 'Hello world');
//     socket.on('disconnect', () => {
//         console.log('user disconnected');
//     });
//     socket.on('chatmessage', msg => {
//         const message = new Msg({ msg });
//         message.save().then(() => {
//             io.emit('message', msg)
//         })
//     })
// });


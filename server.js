require("dotenv").config()
const express = require('express');
const cors = require('cors');
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const server = require('http').createServer(app)
port = process.env.PORT || 4000;
const io = require("socket.io")(server,{
    cors:{
        origin:"*",
        methods:["GET","POST"]
    },
});


//Route file
const auth = require('./Route/auth.route')




mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('connected')
}).catch(err => console.log(err))

app.use("/images", express.static(path.join(__dirname, "public/images")));

//middleware
app.use(express.json());
app.use(helmet());
app.use(cors())
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
    try {
      return res.status(200).json("File uploded successfully");
    } catch (error) {
      console.error(error);
    }
  });



//route file use 
app.use('/auth', auth);

app.get('/', (req, res) => {
    res.send("Hello I am node.js application")
})


app.listen(port,(req, res)=>{
    console.log(`Server is running on ${port}`)
})
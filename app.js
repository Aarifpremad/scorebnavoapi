let express = require("express")
const path = require('path');
const fs = require('fs');

let app = express();
let config = require("./config")
let port = config.port
// let http = require("http")
// let server = http.createServer()
let router = require("./router/router")

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.use(express.json())
app.use("/api",router.userRouter)
app.use("/",router.setting)
app.listen(port,()=>{
console.log("server started in port:",port)
})

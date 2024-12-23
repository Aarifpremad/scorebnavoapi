let express = require("express")
let app = express();
let config = require("./config")
let index = require("./index")
let port = config.port
// let http = require("http")
// let server = http.createServer()
app.listen(port,()=>{
console.log("server started in port:",port)
})

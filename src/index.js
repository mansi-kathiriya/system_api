const express = require("express");
const bodyparser = require("body-parser");
const http = require("http");
const { connectDB } = require("./db/db.connection");
const routes = require("./routes/v1");
const config = require("./config/config");

const app = express();

app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

app.use("v1", routes);
app.use((req,res,next) => {
    console.log("Route Not found!");
});

connectDB();

const server = http.createServer(app);
server.listen(config.port, () => {
    console.log("server listen port number : ", config.port);
  });
const express = require("express");

const app = express();
const SETTINGS = {
    serverPort: 3000,
};
 
app.use(express.static(__dirname + '/client'));
 
app.listen(SETTINGS.serverPort);
console.log('Server listen on port: ' + SETTINGS.serverPort);
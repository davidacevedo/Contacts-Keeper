import http from 'http';
import fs from 'fs';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({ extended: false} ));
app.use(bodyParser.json());

const server = http.createServer(app);
server.listen(port, function() {
  console.log('Listening on: https://localhost:%d', server.address().port);
});
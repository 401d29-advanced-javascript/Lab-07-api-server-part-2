'use strict';

const express = require('express');

const app = express;

const PORT = process.env.PORT || 8080;

app.use(express);

let db = [];

app.get('/categories', (request, response, next) => {
  let counter = db.length;
  let result = db;
  response.json({counter, result});
});

app.post('/', (request, response, next) => {
  let {name} = request.body;
  let record = {name};
  record.id = db.length + 1;
  db.push(record);
  response.json(record);
});

app.put('/categories/:id', (request, response, next) => {
  
});

app.delete('/categories/:id', (request, response, next) => {

});

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
  },
};
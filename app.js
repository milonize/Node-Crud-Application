const express = require('express');
const mongoose = require('mongoose');
const crudRouteHandler=require('./crudRouteHandler/crudRouteHandler')
const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost/todosApplication')
  .then(() => console.log('connected')) // Corrected line: chain .then() after connect()
  .catch(err => console.log(err));



app.use('/crud',crudRouteHandler)

app.listen(3000, () => {
    console.log('connection success on port 3000');
});

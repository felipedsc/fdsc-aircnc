const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://omnistack:omnistack@test-shard-00-00-ir0mf.mongodb.net:27017,test-shard-00-01-ir0mf.mongodb.net:27017,test-shard-00-02-ir0mf.mongodb.net:27017/test?ssl=true&replicaSet=test-shard-0&authSource=admin&retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(routes);

app.listen(3333);
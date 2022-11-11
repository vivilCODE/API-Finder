const mongoose = require('mongoose');
const Api = require('./api-model');
const axios = require('axios');
const express = require('express');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();
const url = process.env.MONGO_ACCESS_STRING;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Database connected :DD');
});

app
  .route('/api/favorites')
  .get(async (req, res) => {
    const data = await Api.find();
    res.send(data);
  })
  .post(async (req, res) => {
    const newFavorite = req.body;
    newFavorite.test = 'Testing';
    Api.create(newFavorite);
  })
  .delete(async (req, res) => {
    const targetId = req.body.targetId;
    await Api.deleteOne({ apiId: targetId });
    const data = await Api.find();
    res.send(data);
  });

const baseUrl = 'https://api.publicapis.org/entries';
app.post('/api/search', async (req, res) => {
  const entries = await axios
    .get(`${baseUrl}${req.body.query}`)
    .then(res => res.data.entries);
  const entriesWithIds = entries?.map(api => ({ ...api, apiId: uuidv4() }));
  res.send(entriesWithIds);
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server started on port ${port} :)`);
});

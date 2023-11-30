require('dotenv').config();

const express = require('express');
const request = require('request');

const app = express();
const PORT = process.env.PORT || 3000;
const NGROK_URL = process.env.NGROK_URL;

app.use((req, res) => {
  const url = NGROK_URL + req.url;
  console.log(url);
  req.pipe(request({ qs:req.query, uri: url, headers: {'ngrok-skip-browser-warning': 'true'} })).pipe(res);
});

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});

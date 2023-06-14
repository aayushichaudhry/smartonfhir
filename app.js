const express = require('express');
const axios = require('axios');
const app = express();

app.get('/index.html', (req, res) => {
    const authorizationCode = req.query.code;
})
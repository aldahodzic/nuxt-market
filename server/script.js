const express = require('express');
const path = require('path'); // модуль для парсинга пути
const ngrok = require('ngrok');
const app = express();

app.get('/api', (req, res) => {
    res.send('API is running');
});

app.listen(1337, function(){
    (async function() {
        const connect = await ngrok.connect(1337);
        console.log(`connected on 1337 and ${connect}`);
    })()
});

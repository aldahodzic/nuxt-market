const express = require('express');
const ngrok = require('ngrok');
const mongoose = require('mongoose');
const bodyParser =require('body-parser');
const app = express();

require('dotenv/config');

app.use(bodyParser.json());

//import routes
const productRoutes = require('./routes/products');

//middleware
app.use('/', productRoutes);

// connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }
).catch(error => handleError(error));

app.listen(1337, async function() {
    try {
        const connect = await ngrok.connect(1337);
        console.log(`connected on 1337 and ${connect}`);
    } catch(e) {
        throw e
    }
});

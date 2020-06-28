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

const products = [
    {
        category: "Kugoo",
        products: [
            {
                name: "Kugoo X1",
                img: "https://static.tildacdn.com/tild3039-6437-4330-b733-643030396430/2020-04-04_120022_.jpg",
                description: "Lorem ipsum dolor sit amet",
                price: "30000"
            },
            {
                name: "Kugoo M4 Pro",
                img: "https://static.tildacdn.com/tild3333-6130-4966-b734-356434616335/DSC_7652__.jpg",
                description: "Lorem ipsum",
                price: "34000"
            }
        ]
    },
    {
        category: "White-Siberia",
        products: [
            {
                name: "Thunder",
                img: "https://images.by.prom.st/182792971_w640_h640_182792971.jpg",
                description: "Lorem ipsum dolor sit amet",
                price: "51900"
            }
        ]
    }
]

// connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    },
    () => console.log('connected to DB!')
);

app.listen(1337, async function() {
    try {
        const connect = await ngrok.connect(1337);
        console.log(`connected on 1337 and ${connect}`);
    } catch(e) {
        throw e
    }
});

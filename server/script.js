const express = require('express');
const ngrok = require('ngrok');
const app = express();

const products = [
    {
        category: 'Kugoo',
        products: [
            {
                name: 'Kugoo X1',
                img: 'https://static.tildacdn.com/tild3039-6437-4330-b733-643030396430/2020-04-04_120022_.jpg',
                description: 'Lorem ipsum dolor sit amet',
                price: '30000'
            },
            {
                name: 'Kugoo M4 Pro',
                img: 'https://static.tildacdn.com/tild3333-6130-4966-b734-356434616335/DSC_7652__.jpg',
                description: 'Lorem ipsum',
                price: '34000'
            }
        ]
    },
    {
        category: 'White-Siberia',
        products: [
            {
                name: 'Thunder',
                img: 'https://images.by.prom.st/182792971_w640_h640_182792971.jpg',
                description: 'Lorem ipsum dolor sit amet',
                price: '51900'
            }
        ]
    }
]

app.get('/all', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if(req.query.category) {
        let categoryProducts = products.find(item => item.category.toLowerCase() === req.query.category.toLowerCase());
        if(categoryProducts) {
            res.send(categoryProducts)
        } else {
            res.send('404')
        }
    } else {
        res.send(products)
    }
});

app.listen(1337, function(){
    (async function() {
        try {
            const connect = await ngrok.connect(1337);
            console.log(`connected on 1337 and ${connect}`);
        } catch(e) {
            throw e
        }
    })()
});

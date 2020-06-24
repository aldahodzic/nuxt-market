const express = require('express');
const ngrok = require('ngrok');
const app = express();

const products = [
    {
        category: 'Kugoo',
        products: [
            {
                name: 'Kugoo X1',
                description: 'Lorem ipsum dolor sit amet',
                price: '30000'
            }
        ]
    },
    {
        category: 'White-Siberia',
        products: [
            {
                name: 'Thunder',
                description: 'Lorem ipsum dolor sit amet',
                price: '51900'
            }
        ]
    }
]

app.get('/all', (req, res) => {
    if(req.query.category) {
        let categoryProducts = products.find(item => item.category.toLowerCase() === req.query.category.toLowerCase());
        if(categoryProducts) {
            res.send(categoryProducts.products[0])
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

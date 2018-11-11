const express = require('express');
const Product = require('../models').Product;
const router = express.Router();

router.get('/', (req, res) => {
  Product.findAll()
    .then(product => res.status(200).send({ data: product }))
    .catch(error => res.status(500).send(error));
});

router.get('/:product_id', (req, res) => {
  Product.find({
    where: {
      product_id: req.params.product_id
    }
  })
    .then(product => {
      if (!product) return res.status(500).send({ error: 'Product Not Found' });
      res.status(200).send(product);
    })
    .catch(error => res.status(500).send(error));
});

module.exports = router;

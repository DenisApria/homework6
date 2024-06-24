const express = require('express');
const router = express.Router();

const productService = require('../services/productService');
const ApiSecurity = require('../middleware/apiSecurity');

router.get('/all', productService.getAll);
router.get('/:id', productService.getOne);
router.post('/add', productService.add);
router.put('/:id', productService.update);
router.post('/search', productService.search);

/*
router.get('/all', ApiSecurity.requireLogin, productService.getAll);
router.get('/:id', ApiSecurity.requireLogin, productService.getOne);
router.post('/add', ApiSecurity.requirePermits('manage_product'), productService.add);
router.put('/:id', ApiSecurity.requirePermits('manage_product'), productService.update);
router.post('/search', ApiSecurity.requireLogin, productService.search);
*/

module.exports = router;
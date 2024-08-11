const express = require('express');
const AdminController = require('../controllers/admin');
const product=require('../models/product')

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('admin/dashboard', {});
});

router.get('/get-all-products', AdminController.getall_product);
router.post('/add-product', AdminController.add_product);
// router.post('/edit-product/:param', AdminController.edit_product);
router.delete('/delete-product/:param', AdminController.delete_product);

module.exports = router;
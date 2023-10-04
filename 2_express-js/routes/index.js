const express = require('express');
const router = express.Router();

// router level middleware
router.use((req, res, next) => {
    console.log('Time : ', Date.now());
    next();
});

// router get products
router.get('/products', (req, res) => {
    res.json([
        { id: 1, name: 'apple' },
        { id: 2, name: 'samsung' },
        { id: 3, name: 'huawei' }
    ]);
});

// router get users
router.get('/users', (req, res) => {
    res.json([
        { id: 1, name: 'sabrina' },
        { id: 2, name: 'koki' },
        { id: 3, name: 'rizkia' }
    ]);
});

// router get orders
router.get('/orders', (req, res) => {
    res.json([
        { id: 1, product_id: 3, user_id: 2 },
        { id: 2, product_id: 1, user_id: 3 },
        { id: 3, product_id: 3, user_id: 1 }
    ]);
});

// router post orders
router.post('/orders', (req, res) => {
    res.json(req.body);
});

// export module
module.exports = router;
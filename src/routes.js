const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    next();
});

router.use('/api', (req, res, next) => {
    console.log('A request to API: ' + req.originalUrl);
    next();
});

router.get('/', (req, res) => {
    res.json({
        message: 'Home'
    });
});

router.get('/api/hello', (req, res) => {
    res.json({
        message: 'hello'
    });
});

module.exports = router;

const express = require('express');
const router = express.Router();

const firebaseAuthMiddleware = require('./middlewares/firebase-auth.middleware');

router.use((req, res, next) => {
    next();
});

router.use('/api', firebaseAuthMiddleware);

router.get('/', (req, res) => {
    res.json({
        message: 'Home'
    });
});

router.get('/api/hello', (req, res) => {
    res.json({
        message: `You're logged in as ${res.locals.user.email} with Firebase UID: ${res.locals.user.uid}`
    });
});

module.exports = router;

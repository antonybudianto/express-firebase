const admin = require('firebase-admin');
const express = require('express');
const router = express.Router();
const logger = require('./utils/logger');

router.use((req, res, next) => {
    next();
});

router.use('/api', (req, res, next) => {
    let authorization = req.header('Authorization');
    if (authorization) {
        let token = authorization.split(' ');
        admin.auth().verifyIdToken(token[1])
        .then((decodedToken) => {
            res.locals.user = decodedToken;
            next();
        })
        .catch(err => {
            logger.log(err);
            res.sendStatus(401);
        });
    } else {
        logger.log('Authorization Header not found');
        res.sendStatus(401);
    }
});

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

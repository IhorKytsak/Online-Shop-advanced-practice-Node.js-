const express = require('express');

const authRoutes = require('../controllers/auth');

const router = express.Router();

router.get('/login', authRoutes.getLogin);

router.post('/login', authRoutes.postLogin);

router.post('/logout', authRoutes.postLogout);

module.exports = router;

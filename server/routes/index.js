import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/cards', (req, res) => {
    res.render('./views/cards');
});

module.exports = router;
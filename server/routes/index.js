import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/packages', (req, res) => {
    res.render('./views/packages/packages');
});

module.exports = router;
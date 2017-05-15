import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/packages', (req, res) => {
    res.render('./views/packages/packages');
});

router.get('/demo/agency', (req, res) => {
    res.render('./views/demos/agency/index');
});

router.get('/demo/agency/contact', (req, res) => {
    res.render('./views/demos/agency/contact');
});

router.get('/demo/agency/work', (req, res) => {
    res.render('./views/demos/agency/work');
});

router.get('/demo/blog', (req, res) => {
    res.render('./views/demos/blog/index');
});

router.get('/demo/blog/left-sidebar', (req, res) => {
    res.render('./views/demos/blog/left-sidebar');
});

router.get('/demo/blog/right-sidebar', (req, res) => {
    res.render('./views/demos/blog/right-sidebar');
});

router.get('/demo/blog/no-sidebar', (req, res) => {
    res.render('./views/demos/blog/no-sidebar');
});

module.exports = router;
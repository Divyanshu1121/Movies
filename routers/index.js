const express = require('express');
const movieCtrl = require('../controllers/movieController.js');
const router = express.Router();

router.get('/', movieCtrl.homePage);
router.get('/home', movieCtrl.homePage);
router.get('/add-movie', movieCtrl.indexPage);
router.get('/movie-data', movieCtrl.aboutPage);
router.get('/about',movieCtrl.aboutPage);

router.get('/delete/:id', movieCtrl.deleteMovieData);
router.get('/edit/:id', movieCtrl.editPage);
router.post('/update/:id', movieCtrl.updateMovieData);

router.get('/getData', movieCtrl.getMovieData);
router.post('/create', movieCtrl.createData);

module.exports = router;
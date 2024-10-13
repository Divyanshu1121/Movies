const movieModel = require('../models/movieSchema');

module.exports.homePage = (req, res) => {
    return res.render('home');
}

module.exports.indexPage = (req, res) => {
    return res.render('index');
}

module.exports.aboutPage = async (req, res) => {
    try {
        let data = await movieModel.find({});
        return res.render('about', { data });
    } catch (error) {
        console.log(error);
    }
}

module.exports.createData = async (req, res) => {
    try {
        console.log(req.body);
        await movieModel.create(req.body);
        return res.redirect('/about');
    } catch (error) {
        console.log(error);
    }
}

module.exports.getMovieData = async (req, res) => {
    try {
        let data = await movieModel.find({});
        return res.json(data);
    } catch (error) {
        console.log(error);
    }
}

module.exports.editPage = async (req, res) => {
    try {
        let id = req.params.id;
        let data = await movieModel.findById(id);
        return res.render('edit', { data });
    } catch (error) {
        console.log(error);
        return res.render('edit');
    }
}

module.exports.updateMovieData = async (req, res) => {
    try {
        let { id } = req.params;
        await movieModel.findByIdAndUpdate(id, req.body);
        return res.redirect('/about');
    } catch (error) {
        console.log(error);
        return res.redirect('/about');
    }
}

module.exports.deleteMovieData = async (req, res) => {
    try {
        let { id } = req.params;
        await movieModel.findByIdAndDelete(id);
        return res.redirect('/about');
    } catch (error) {
        console.log(error);
        return res.redirect('/');
    }
}
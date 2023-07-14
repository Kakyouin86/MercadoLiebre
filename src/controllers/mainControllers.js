const mainController = {
    index: (req, res) =>
    {
        res.render('main/home');
    },
    login: (req, res) =>
    {
        res.render('main/login');
    },
    producto: (req, res) =>
    {
        res.render('main/producto');
    },
    register: (req, res) =>
    {
        res.render('main/register');
    },
}
module.exports = mainController;
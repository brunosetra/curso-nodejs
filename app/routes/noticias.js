var dbConn = require('../../config/dbConnection')

module.exports = (app) => {
    app.get('/noticias', (req, res) => {

        var conn = dbConn();

        conn.query('select * from noticias', (erro, result) => {
            res.render('noticias/noticias', { noticias: result })
        })



    })
}
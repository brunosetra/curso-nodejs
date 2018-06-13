module.exports = (app) => {

    app.get('/noticias', (req, res) => {
        
        var conn = app.config.dbConnection();

        var noticiasModel = app.app.models.noticiasModel
        
        noticiasModel.getNoticias(conn, (erro, result) => {
            res.render('noticias/noticias', { noticias: result })
        })
        
    })
    
}
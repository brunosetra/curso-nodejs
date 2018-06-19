module.exports = (app) => {

    app.get('/noticias', (req, res) => {
        
        var conn = app.config.dbConnection();

        var noticiasModel = new app.app.models.NoticiasDAO(conn)
        
        noticiasModel.getNoticias((erro, result) => {
            res.render('noticias/noticias', { noticias: result })
        })
        
    })

    app.get('/noticia', (req, res) => {
        
        var conn = app.config.dbConnection();

        var noticiasModel = new app.app.models.NoticiasDAO(conn)
        
        noticiasModel.getNoticia((erro, result) => {
            res.render('noticias/noticia', { noticias: result })
        })
        
        
    })
    
    
}
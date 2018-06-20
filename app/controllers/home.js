module.exports.index = function(application, req, res){

    var conn = application.config.dbConnection()
    var noticiasModel = new application.app.models.NoticiasDAO(conn)

    noticiasModel.get5UltimasNoticias(function(error, result){

        res.render('home/index', {noticias: result});
    })

}
module.exports = (app) => {
    app.get('/formulario_inclusao_noticia', (req,res)=> {
        res.render('admin/form_add_noticia', {validacao : {}, noticia : {}})
    })

    app.post('/noticias/salvar', (req,res)=>{
        var noticia = req.body

        req.assert('titulo','Titulo Obrigatorio').notEmpty();
        req.assert('resumo','Resumo Obrigatorio').notEmpty();
        req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10,100);
        req.assert('autor','Autor Obrigatorio').notEmpty();
        req.assert('data_noticia', 'Data é obrigatório').notEmpty().isISO8601();
        req.assert('noticia','Noticia Obrigatorio').notEmpty();

        var erros = req.validationErrors()

        console.log('Log de erro ao inserir noticia. ', erros)

        if (erros){
            res.render('admin/form_add_noticia', {validacao : erros, noticia : noticia})
            return
        }

        var conn = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(conn)

        noticiasModel.salvarNoticia(noticia, (error,result)=>{



            res.redirect('/noticias')
        })


        
    })
}
var app = require('./config/server')

// var rotaHome = require('./app/routes/home')(app)
// var rotaNoticias = require('./app/routes/noticias')(app)
// var rotaFormularioInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app)

app.listen(3000, ()=> {
    console.log('Servidor rodando com Express')
})
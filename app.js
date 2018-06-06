var express = require('express')

var app = express()

app.set('view engine', 'ejs')

app.get('/', (req,res)=> {
    res.send('<html><body>Portal de Noticias</body></html>')
    
})

app.get('/tecnologia', (req,res)=> {
    res.render('secao/tecnologia')
})

app.get('/moda', (req,res)=> {
    res.send('<html><body>Portal de Noticias Moda</body></html>')
})

app.get('/games', (req,res)=> {
    res.send('<html><body>Portal de Noticias Games</body></html>')
})

app.listen(3000, ()=> {
    console.log('Servidor rodando com Express')
})
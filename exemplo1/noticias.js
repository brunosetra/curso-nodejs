var http = require('http');

http.createServer( (req,res)=> {
    
    if (req.url === '/tecnologia') {
        res.end("<html><body>Portal de Noticias de Tecnologia</body></html>");
    } else if (req.url === '/moda') {
        res.end("<html><body>Portal de Noticias de Moda</body></html>");
    } else if (req.url === '/games') {
        res.end("<html><body>Portal de Noticias de Games</body></html>");
    } else {
        res.end("<html><body>Portal de Noticias</body></html>");
    }
    
}).listen(3000);


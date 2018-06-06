var http = require('http');

http.createServer( (req,res)=> {
    res.end("<html><body>Portal de Noticias</body></html>");
    
}).listen(3000);


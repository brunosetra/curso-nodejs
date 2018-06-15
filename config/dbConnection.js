var mysql = require('mysql')

var connMySQL = ()=>{

    return mysql.createConnection({
        host : '172.31.160.36',
        user : 'root',
        password: '1q2w3e4r',
        database : 'portal_noticias'
    })

}

module.exports = ()=> {
    return connMySQL;
}

var mysql = require('mysql')

var connMySQL = ()=>{
    console.log('conexao db estabelecida')

    return mysql.createConnection({
        host : '172.31.160.36',
        user : 'root',
        password: '1q2w3e4r',
        database : 'portal_noticias'
    })

}

module.exports = ()=> {
    console.log('dbConn init')
    return connMySQL;
}

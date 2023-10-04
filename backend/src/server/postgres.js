const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 5432
});

// pool.on('connect', () => {
//     console.log('Base de dados encontrada com sucesso');
// })

pool.connect((error, client, release) => {
    if (error) {
        return console.log("Erro ao conectar com banco de dados: ", error)
    }
    console.log('Base de dados encontrada com sucesso');
    release();
})

module.exports = pool;
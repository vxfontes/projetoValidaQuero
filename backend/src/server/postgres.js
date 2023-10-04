const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 5432
});

pool.on('connect', () => {
    console.log('Base de dados encontrada com sucesso');
})

module.exports = pool;
const db = require('../../server/postgres');

module.exports = {

    /**
     * Add User: 
     * adiciona uma nova tupla na tabela usuario, com id autoincrementado pelo próprio banco.
     * @param {*} req nome, matricula, senha e perfil
     */
    async addUser(req, res) {
        const { nome, matricula, senha, perfil } = req.query
        
        try {
            const consulta =
                `INSERT INTO "ValidaQuero"."usuario"(nome, matricula, senha, perfil) VALUES ('${nome}', '${matricula}', '${senha}', ${perfil})`;
            const resultado = await db.query(consulta);
            
            if (resultado.rowCount == 1) { // Verifica se houve resultado na inserção de usuário, retornando o número de tuplas afetadas pela consulta.
                res.status(200).json({ status: 'success', message: 'Usuário adicionado com sucesso' });
            }
            else {
                res.status(400).json({ status: 'error', message: 'Ocorreu um erro ao inserir um usuário' });
            }
        } catch (error) {
            console.error('Erro ao executar a consulta:', error);
            res.status(500).json({ status: 'error', message: 'Erro ao executar a consulta', error: error });
        }
    }
}
const db = require('../../server/postgres');

module.exports = {

    /**
     * 
     * @param {*} req envio de matricula e senha
     * @param {*} res recebe usuario para efetuar login
     */
    async authUser(req, res) {
        const { matricula, senha } = req.query

        const consulta = `SELECT nome, matricula, senha, perfil FROM usuario 
            WHERE matricula='${matricula}' and senha='${senha}'`
    
        try {
            const resultado = await db.query(consulta);
    
            if (resultado.rows == '') {
                res.status(400).json({ status: 'error', message: 'Usuário não encontrado no banco de dados' });
            } else {
                res.status(200).json({ status: 'sucess', result: resultado.rows[0] })
            }
        } catch (error) {
            res.status(400).json({ status: 'error', message: 'Erro ao executar a consulta' });
        }
    }
}

const axios = require('axios');
const templates = require('./files/templates.json');
const arquivos = require('./files/arquivos.json');

async function templatesReq() {
    const apiUrl = 'http://localhost:3003/template/';

    for (const template of templates) {
        try {
            const response = await axios.post(apiUrl, template);
            console.log(response.data.message)
        } catch (error) {
            console.error(`Erro na requisição para o template: `, error);
        }
    }
}

async function arquivosReq() {
    const apiUrl = 'http://localhost:3000/arquivo/';

    for (const arquivo of arquivos) {
        try {
            await axios.post(apiUrl, arquivo);
            // console.log(response.data.message)
        } catch (error) {
            console.error(`Erro na requisição para o arquivo: `);
        }
    }
}

// templatesReq();
arquivosReq();
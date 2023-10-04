const express = require('express')
const cors = require('cors');
const app = express();
const morgan = require('morgan')

const port = 3003;
const ip = '192.168.0.125';

const route = require('./routes/allRoutes');

app.use(express.json())
app.use(cors());
app.use('/', route);
app.use(morgan('dev'))

/* Definindo qual porta a aplicação vai rodar */
app.listen(port, ip, () => console.log("O servidor está rodando na porta", port));

const server = require('./server');

const mongoose = require("mongoose");

//Configuração de variável de ambiente para Heroku
const port = process.env.PORT || 3030;

mongoose.connect(process.env.DATABASE_URL)
.then(() => {
    console.log('Conectamos ao MongoDB!')
    server.listen(port, () => {
        console.log('[SERVER] API iniciou com sucesso!')
    });
})
.catch((err) => console.log(err))
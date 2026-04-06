//Importações

const express = require('express') //Framework que cria o servidor e as rotas.
const {criarBanco} = require('./database') //A chave que vai abrir a conexão com o banco de dados.

const app = express(); //Inicialização do motor do servidor.

app.use(express.json()) // configura o express para entender dados enviados no formato JSON.

//Criando a rota principal - Raiz

app.get("/", (req, res) => {

    //res.send: Envia uma resposta simples(texto, html, json)
    res.send(`
        <body>
            <h1>ZelaCidade</h1>
            <h2>Gestão de Problemas Urbanos</h2>
            <p>Endpoint que leva aos incidentes cadastrados: /incidentes </p>
        
        </body>    
        
    `);

});

//Porta do Servidor

const PORT = 3000;
app.listen(PORT, () => {
console.log(`Servidor rodando em http://localhost:${PORT}`)


});

//Rota de Listagem: Para buscar todos os problemas registrados.

app.get("/incidentes", async (req, res) => {

    const db = await criarBanco()

    const listaIncidentes = await db.all(`SELECT * FROM incidentes`);
    res.json(listaIncidentes);
    

})
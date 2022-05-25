var express = require('express');
var app = express();

var listaMenu = ['sopa', 'x-tudo', 'x-salada','picanha'];
var listaAnimes = ["dbz", 'death note', 'pokemon', 'one piece']

app.get('/', function(requisicao, resposta) {
    resposta.send('{"produto":"bolo de morango"}');

});

app.get('/menu', function(requisicao, resposta){
    resposta.send(`{["Menu":}'[${listaMenu}]}`);
});

app.get('/anime', function(requisicao, resposta){
    resposta.send(`{["Animes":}'[${listaAnimes}]}`);
})

console.log("Meu servidor está rodando na porta 8080");

app.listen(8080); // Porta




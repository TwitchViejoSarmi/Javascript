const express = require('express');
const path = require('path');
const say = require('say');

const app = express();

app.use(express.static(__dirname));

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'index.html'));
    say.speak('Hola desde Node con Express');
});
app.listen(5000, () => {
    console.log('El servidor ha sido iniciado...');
});
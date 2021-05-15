const express = require('express');
const app = express();
const {readFileSync, writeFileSync} = require('fs');

const port = 3000;
app.listen(port, () => console.log("Server running..."))

app.use(express.static('public'))
app.use(express.json());


app.post('/color', (request, response) => {
    let colors = [request.body];
    let newColor = writeFileSync('colors.json', JSON.stringify(colors));
    response.send(newColor);
});


app.get('/color', (request, response) => { 
    let colors = JSON.parse(readFileSync('colors.json'));
    response.send(colors);
});


const express = require('express');
const app = express();
require ('dotenv') . config ( ) 

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('¡Hola desde Node.js en Azure!');
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
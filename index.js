const express = require('express');

// Crear una instancia de la aplicación Express
const app = express();

// Definir una ruta para manejar solicitudes HTTP GET en la raíz del servidor
app.get('/', (req, res) => {
  res.send('¡Hola Mundo!');
});

// Escuchar en el puerto 80
const PORT = 80;
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});


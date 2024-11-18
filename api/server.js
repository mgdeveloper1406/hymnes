// server.js
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

// Sirve archivos estáticos desde la carpeta 'public'
app.use('/audios', express.static(path.join(__dirname, 'public/audios')));

// Ruta para obtener todos los himnos
app.get('/api/hymns', (req, res) => {
  const hymnsPath = path.join(__dirname, 'data', 'hymns_actualizado.json');
  fs.readFile(hymnsPath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error al leer hymns_actualizado.json' });
    }
    const hymns = JSON.parse(data);
    res.json(hymns);
  });
});

// Ruta para obtener los detalles de un himno específico
app.get('/api/hymns/:id', (req, res) => {
  const hymnId = req.params.id;
  const hymnsPath = path.join(__dirname, 'data', 'hymns_actualizado.json');
  fs.readFile(hymnsPath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error al leer hymns_actualizado.json' });
    }
    const hymns = JSON.parse(data);
    const hymn = hymns.find(h => h.numero === hymnId);
    if (hymn) {
      res.json(hymn);
    } else {
      res.status(404).json({ message: 'Himno no encontrado' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

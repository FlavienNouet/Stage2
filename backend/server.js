const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialisation d'Express
const app = express();
const port = process.env.PORT || 3000;

// Configuration des middlewares
app.use(cors()); // Autoriser les requêtes provenant de différents domaines
app.use(bodyParser.json()); // Permet de parser les corps JSON

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
  });
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/auth');  // Importation des routes

dotenv.config();  // Charger les variables d'environnement
const app = express();

app.use(cors()); // Gérer les requêtes CORS
app.use(express.json()); // Middleware pour parser le JSON du corps de la requête

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connexion à la base de données réussie !'))
    .catch((err) => console.log('Erreur de connexion à la base de données', err));

// Routes d'authentification
app.use('/api/auth', authRoutes);  // Ajouter une préfixe '/api/auth' à nos routes d'authentification

// Démarrer le serveur
app.listen(5000, () => {
    console.log('Serveur en cours d\'exécution sur le port 5000');
});

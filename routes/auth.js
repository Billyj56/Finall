// routes/auth.js
const express = require('express');
const router = express.Router();
// Importer authController.js directement depuis le répertoire racine
const authController = require('../authController');  // Le chemin relatif doit être mis à jour

// Route d'inscription
router.post('/signup', authController.signup);

// Route de connexion
router.post('/login', authController.login);

module.exports = router;

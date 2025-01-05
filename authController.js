const User = require('./models/User');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

// Inscription d'un nouvel utilisateur
const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Vérifier si l'utilisateur existe déjà
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email déjà utilisé' });
        }

        // Créer un nouvel utilisateur
        const newUser = new User({ username, email, password });
        await newUser.save();

        res.status(201).json({ message: 'Utilisateur créé avec succès' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur interne du serveur' });
    }
};

// Connexion d'un utilisateur
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Vérifier si l'utilisateur existe
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Utilisateur non trouvé' });
        }

        // Comparer le mot de passe
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Mot de passe incorrect' });
        }

        // Créer un token JWT
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'Connexion réussie', token });
    } catch (error) {
        res.status(500).json({ message: 'Erreur interne du serveur' });
    }
};

module.exports = { signup, login };

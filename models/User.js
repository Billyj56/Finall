const mongoose = require('mongoose');

// Schéma de l'utilisateur
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// Hacher le mot de passe avant de le sauvegarder dans la base de données
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        const bcrypt = require('bcryptjs');
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

// Méthode pour comparer le mot de passe lors de la connexion
userSchema.methods.comparePassword = function (password) {
    const bcrypt = require('bcryptjs');
    return bcrypt.compare(password, this.password);
};

// Création du modèle User
module.exports = mongoose.model('User', userSchema);

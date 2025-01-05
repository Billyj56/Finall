// Gérer la création de compte (inscription)
document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche la soumission du formulaire par défaut

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Vérifie si les champs ne sont pas vides
    if (username && email && password) {
        // Sauvegarder les données dans le LocalStorage
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        // Rediriger vers la page de connexion après inscription
        window.location.href = 'index.html';  // Rediriger vers login (index.html)
    } else {
        alert('Veuillez remplir tous les champs.');
    }
});

// Gérer la connexion
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche la soumission du formulaire par défaut

    const usernameInput = document.getElementById('login-username').value;
    const passwordInput = document.getElementById('login-password').value;

    // Récupérer les données du LocalStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Vérifier les identifiants
    if (usernameInput === storedUsername && passwordInput === storedPassword) {
        alert('Connexion réussie !');
        window.location.href = 'index.html';  // Rediriger vers la page principale après connexion
    } else {
        alert('Nom d\'utilisateur ou mot de passe incorrect.');
    }
});

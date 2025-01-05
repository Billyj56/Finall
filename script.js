// Gestion de la soumission du formulaire
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêcher le rechargement de la page

    // Récupérer les valeurs des champs
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Vérification simple (ajoutez votre propre logique ici)
    if (username === "admin" && password === "1234") {
        // Redirection vers la page principale après succès
        window.location.href = "main.html";
    } else {
        alert("Nom d'utilisateur ou mot de passe incorrect !");
    }
});

// Gestion du lien pour créer un compte
document.getElementById("create-account-link").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Fonctionnalité de création de compte non implémentée pour l'instant.");
});

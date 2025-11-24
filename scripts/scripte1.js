// --- LOGIQUE DU DIAPORAMA ---
let slideIndex = 0;

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    
    // Si la collection d'images n'existe pas, on arrête pour éviter les erreurs
    if (slides.length === 0) return; 

    // 1. Masquer toutes les images
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    // 2. Mettre à jour l'index pour boucler
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    
    // 3. Afficher l'image actuelle (n'oubliez pas que slideIndex commence à 1 pour l'utilisateur)
    slides[slideIndex - 1].style.display = "block";  
    
    // 4. Appeler cette fonction à nouveau après 6 secondes (6000 millisecondes)
    setTimeout(showSlides, 6000); 
}

// Lancer le diaporama une fois que le document est prêt
document.addEventListener('DOMContentLoaded', function() {
    // ... (Votre code pour le menu Hamburger ici) ...
    
    // Démarrer le diaporama
    showSlides();
});
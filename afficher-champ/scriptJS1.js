

       document.addEventListener('DOMContentLoaded', function() {
    // 1. Récupérer les éléments principaux du DOM
    const selectElement = document.getElementById('choixSelection');
    
    // Récupérer les conteneurs de classe spécifiques
    const conteneurMaternelle = document.getElementById('classe-M');
    const conteneurPrimaire = document.getElementById('classe-P');
    const conteneurSecondaire = document.getElementById('classe-S');
    const conteneurLycee = document.getElementById('classe-L'); // J'ai corrigé l'ID ici (voir note)

    // Récupérer l'ancien 'champCache' (s'il est toujours nécessaire)
    const conteneurAutre = document.getElementById('champCache');

    // Tableau des tous les conteneurs que nous devons gérer
    const tousLesConteneurs = [
        conteneurMaternelle, 
        conteneurPrimaire, 
        conteneurSecondaire, 
        conteneurLycee, 
        conteneurAutre
    ];
    
    // Fonction utilitaire pour cacher tous les conteneurs
    function cacherTousLesChamps() {
        tousLesConteneurs.forEach(conteneur => {
            if (conteneur) {
                conteneur.style.display = 'none';
            }
        });
    }

    // 2. Fonction principale déclenchée au changement
    selectElement.addEventListener('change', function() {
        // Étape 1 : Cacher tous les champs avant de décider lequel afficher
        cacherTousLesChamps(); 
        
        // Étape 2 : Utiliser le switch pour déterminer quel champ afficher
        switch (selectElement.value) {
            
            case 'maternelle':
                if (conteneurMaternelle) {
                    conteneurMaternelle.style.display = 'block';
                }
                break;
                
            case 'primaire':
                if (conteneurPrimaire) {
                    conteneurPrimaire.style.display = 'block';
                }
                break;

            case 'secondaire':
                if (conteneurSecondaire) {
                    conteneurSecondaire.style.display = 'block';
                }
                break;
                
            case 'lycée':
                if (conteneurLycee) {
                    conteneurLycee.style.display = 'block';
                }
                break;
                
            case 'autre': // Si vous aviez l'option 'autre'
                if (conteneurAutre) {
                    conteneurAutre.style.display = 'block';
                }
                break;
                
            default:
                // Pour 'standard' ou toute autre valeur, on ne fait rien (tous sont déjà cachés)
                break;
        }
    });

         // 1. Sélectionner le bouton
const btn = document.querySelector(".btn"); 

// 2. Attacher un écouteur d'événement pour le 'click'
btn.addEventListener('click', function() {
    // 3. Définir l'effet à exécuter
    alert("Données enregistrées avec succès !");
});
         
    // 3. Exécuter la vérification au chargement initial
    selectElement.dispatchEvent(new Event('change'));
});
// 1. Sélectionner les éléments
const checkbox = document.getElementById("checkbox");
// document.querySelector sélectionne le premier élément avec la classe 'btn'
const btn = document.querySelector(".btn"); 

// --- Initialisation ---
// Le bouton est désactivé (grisé) par défaut au chargement de la page
btn.disabled = true;

// --- Gestion de l'événement ---
checkbox.addEventListener('change', function() {
    // La propriété 'checkbox.checked' est TRUE si cochée, FALSE sinon.
    if (checkbox.checked) {
        // Si cochée : Activer le bouton (le CSS enlève l'effet grisé)
        btn.disabled = false;
    } else {
        // Si non cochée : Désactiver le bouton (le CSS ajoute l'effet grisé)
        btn.disabled = true;
    }
  
});
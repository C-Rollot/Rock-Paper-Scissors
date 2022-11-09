//Fonction générale du jeu
function game() {
    //Variables
    let playerScore = 0;
    let computerScore = 0;
    let choiceArray = ["la pierre", "la feuille", "les ciseaux"];

    //Récupération des boutons
    let pierre = document.getElementById("pierre");
    let feuille = document.getElementById("feuille");
    let ciseaux = document.getElementById("ciseaux");

    //Récupération des Div "joueurs" et "scores"
    let joueurs = document.getElementById("joueurs");
    let scores = document.getElementById("scores");

    //Fonction de chaque atout
    function rock() {
        //Joueur
        let playerChoice = document.createElement("p");
        playerChoice.innerHTML = "Joueur 1 choisit la pierre";
        joueurs.appendChild(playerChoice);

        //Ordinateur

        //Sélection d'un atout aléatoire
        let rand = Math.floor(Math.random()*choiceArray.length);
        let computerSelection = choiceArray[rand];

        let computerChoice = document.createElement("p");
        computerChoice.innerHTML = "L'Ordinateur choisit " + computerSelection;
        joueurs.appendChild(computerChoice);
    }

    function paper() {
        //Joueur
        let playerChoice = document.createElement("p");
        playerChoice.innerHTML = "Joueur 1 choisit la feuille";
        joueurs.appendChild(playerChoice);   

        //Ordinateur

        //Sélection d'un atout aléatoire
        let rand = Math.floor(Math.random()*choiceArray.length);
        let computerSelection = choiceArray[rand];

        let computerChoice = document.createElement("p");
        computerChoice.innerHTML = "L'Ordinateur choisit " + computerSelection;
        joueurs.appendChild(computerChoice);
    }

    function scissors() {
        //Joueur
        let playerChoice = document.createElement("p");
        playerChoice.innerHTML = "Joueur 1 choisit les ciseaux";
        joueurs.appendChild(playerChoice);  
        
        //Ordinateur

        //Sélection d'un atout aléatoire
        let rand = Math.floor(Math.random()*choiceArray.length);
        let computerSelection = choiceArray[rand];

        let computerChoice = document.createElement("p");
        computerChoice.innerHTML = "L'Ordinateur choisit " + computerSelection;
        joueurs.appendChild(computerChoice);
    }

    //Event Listeners
    pierre.addEventListener("click", rock);
    feuille.addEventListener("click", paper);
    ciseaux.addEventListener("click", scissors);
}

game();
//FONCTION DE CHANGEMENT DE MANCHE A TERMINER

//Fonction générale du jeu
function game() {
    //Demande de nom / pseudo
    let username = prompt("Comment doit-on vous appeler?");

    //Variables
    let playerScore = 0;
    let computerScore = 0;
    let choiceArray = ["la pierre", "la feuille", "les ciseaux"];

    //Récupération des boutons
    let pierre = document.getElementById("pierre");
    let feuille = document.getElementById("feuille");
    let ciseaux = document.getElementById("ciseaux");
    let restartButton = document.getElementById("restartButton");

    restartButton.style.display = "none";

    //Récupération des Div "joueurs" et "scores"
    let joueurs = document.getElementById("joueurs");
    let scores = document.getElementById("scores");

    //Fonction de chaque atout
    function rock() {
        let roundDiv = document.createElement("div");

        //Titre
        let titre = document.createElement("h2");
        titre.textContent = "MANCHE";
        roundDiv.appendChild(titre);
        joueurs.appendChild(roundDiv);

        //Joueur
        let playerSelection = choiceArray[0];
        let playerChoice = document.createElement("p");
        playerChoice.textContent = `${username} choisit la pierre`;
        roundDiv.appendChild(playerChoice);
        joueurs.appendChild(roundDiv);

        //Ordinateur

        //Sélection d'un atout aléatoire
        let rand = Math.floor(Math.random()*choiceArray.length);
        let computerSelection = choiceArray[rand];

        let computerChoice = document.createElement("p");
        computerChoice.textContent = "L'Ordinateur choisit " + computerSelection;
        roundDiv.appendChild(computerChoice);
        joueurs.appendChild(roundDiv);

        //Scores
        //Egalité
        if (playerSelection == computerSelection) {
            let drawAlert = document.createElement("h3");
            drawAlert.textContent = "Egalité!"
            roundDiv.appendChild(drawAlert);
            joueurs.appendChild(roundDiv);
        }

        //Victoire du joueur
        if (playerSelection == choiceArray[0] && computerSelection == choiceArray[2]) {
            playerScore++;
            let winAlert = document.createElement("h3");
            winAlert.textContent = `${username} remporte la manche!`;
            let scoreAlert = document.createElement("h3");
            scoreAlert.textContent = `${username} ${playerScore} - ${computerScore} Ordinateur`;
            roundDiv.appendChild(winAlert);
            roundDiv.appendChild(scoreAlert);
            joueurs.appendChild(roundDiv);
        }

        //Victoire de l'ordinateur
        if (playerSelection == choiceArray[0] && computerSelection == choiceArray[1]) {
            computerScore++;
            let loseAlert = document.createElement("h3");
            loseAlert.textContent = "L'Ordinateur remporte la manche!";
            let scoreAlert = document.createElement("h3");
            scoreAlert.textContent = `${username} ${playerScore} - ${computerScore} Ordinateur`;
            roundDiv.appendChild(loseAlert);
            roundDiv.appendChild(scoreAlert);
            joueurs.appendChild(roundDiv);
        }

        endGame();
    }

    function paper() {
        let roundDiv = document.createElement("div");

        //Titre
        let titre = document.createElement("h2");
        titre.textContent = "MANCHE";
        roundDiv.appendChild(titre);
        joueurs.appendChild(roundDiv);

        //Joueur
        let playerSelection = choiceArray[1];
        let playerChoice = document.createElement("p");
        playerChoice.textContent = `${username} choisit la feuille`;
        roundDiv.appendChild(playerChoice);
        joueurs.appendChild(roundDiv);

        //Ordinateur

        //Sélection d'un atout aléatoire
        let rand = Math.floor(Math.random()*choiceArray.length);
        let computerSelection = choiceArray[rand];

        let computerChoice = document.createElement("p");
        computerChoice.textContent = "L'Ordinateur choisit " + computerSelection;
        roundDiv.appendChild(computerChoice);
        joueurs.appendChild(roundDiv);

        //Scores
        //Egalité
        if (playerSelection == computerSelection) {
            let drawAlert = document.createElement("h3");
            drawAlert.textContent = "Egalité!"
            roundDiv.appendChild(drawAlert);
            joueurs.appendChild(roundDiv);
        }

        //Victoire du joueur
        if (playerSelection == choiceArray[1] && computerSelection == choiceArray[0]) {
            playerScore++;
            let winAlert = document.createElement("h3");
            winAlert.textContent = `${username} remporte la manche!`;
            let scoreAlert = document.createElement("h3");
            scoreAlert.textContent = `${username} ${playerScore} - ${computerScore} Ordinateur`;
            roundDiv.appendChild(winAlert);
            roundDiv.appendChild(scoreAlert);
            joueurs.appendChild(roundDiv);
        }

        //Victoire de l'ordinateur
        if (playerSelection == choiceArray[1] && computerSelection == choiceArray[2]) {
            computerScore++;
            let loseAlert = document.createElement("h3");
            loseAlert.textContent = "L'Ordinateur remporte la manche!";
            let scoreAlert = document.createElement("h3");
            scoreAlert.textContent = `${username} ${playerScore} - ${computerScore} Ordinateur`;
            roundDiv.appendChild(loseAlert);
            roundDiv.appendChild(scoreAlert);
            joueurs.appendChild(roundDiv);
        }

        endGame();
    }

    function scissors() {
        let roundDiv = document.createElement("div");

        //Titre
        let titre = document.createElement("h2");
        titre.textContent = "MANCHE";
        roundDiv.appendChild(titre);

        //Joueur
        let playerSelection = choiceArray[2];
        let playerChoice = document.createElement("p");
        playerChoice.textContent = `${username} choisit les ciseaux`;
        roundDiv.appendChild(playerChoice);  
        
        //Ordinateur

        //Sélection d'un atout aléatoire
        let rand = Math.floor(Math.random()*choiceArray.length);
        let computerSelection = choiceArray[rand];

        let computerChoice = document.createElement("p");
        computerChoice.textContent = "L'Ordinateur choisit " + computerSelection;
        roundDiv.appendChild(computerChoice);
        joueurs.appendChild(roundDiv);

        //Scores
        //Egalité
        if (playerSelection == computerSelection) {
            let drawAlert = document.createElement("h3");
            drawAlert.textContent = "Egalité!"
            roundDiv.appendChild(drawAlert);
            joueurs.appendChild(roundDiv);
        }

        //Victoire du joueur
        if (playerSelection == choiceArray[2] && computerSelection == choiceArray[1]) {
            playerScore++;
            let winAlert = document.createElement("h3");
            winAlert.textContent = `${username} remporte la manche!`;
            let scoreAlert = document.createElement("h3");
            scoreAlert.textContent = `${username} ${playerScore} - ${computerScore} Ordinateur`;
            roundDiv.appendChild(winAlert);
            roundDiv.appendChild(scoreAlert);
            joueurs.appendChild(roundDiv);
        }

        //Victoire de l'ordinateur
        if (playerSelection == choiceArray[2] && computerSelection == choiceArray[0]) {
            computerScore++;
            let loseAlert = document.createElement("h3");
            loseAlert.textContent = "L'Ordinateur remporte la manche!";
            let scoreAlert = document.createElement("h3");
            scoreAlert.textContent = `${username} ${playerScore} - ${computerScore} Ordinateur`;
            roundDiv.appendChild(loseAlert);
            roundDiv.appendChild(scoreAlert);
            joueurs.appendChild(roundDiv);
        }

        endGame();
    }

    //Conditions et évènements de victoire / défaite
    function endGame() {
        let endMessage = document.createElement("div");

        if (playerScore == 3) {
            let winMessage = document.createElement("h2");
            winMessage.textContent = `${username} remporte la partie! Score final: ${username} ${playerScore} - ${computerScore} Ordinateur`;
            endMessage.appendChild(winMessage);
            joueurs.appendChild(endMessage);

            restartButton.style.display = "block";
        } else if (computerScore == 3) {
            let loseMessage = document.createElement("h2");
            loseMessage.textContent = `L'Ordinateur remporte la partie! Score final: ${username} ${playerScore} - ${computerScore} Ordinateur`;
            endMessage.appendChild(loseMessage);
            joueurs.appendChild(endMessage);

            restartButton.style.display = "block";
        }
    }

    //Redémarrage du jeu
    function restart() {
        window.location.reload();
    }

    //Event Listeners
    pierre.addEventListener("click", rock);
    feuille.addEventListener("click", paper);
    ciseaux.addEventListener("click", scissors);
    restartButton.addEventListener("click", restart);
}

game();
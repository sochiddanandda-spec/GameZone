const games = document.querySelectorAll(".game-card");


// SCROLL TO GAMES

function scrollToGames() {

    document
        .getElementById("games")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// CATEGORY FILTER

function filterCategory(category) {

    games.forEach(game => {

        const gameCategory =
            game.getAttribute("data-category");

        if (
            category === "all" ||
            gameCategory === category
        ) {

            game.style.display = "block";

        } else {

            game.style.display = "none";

        }

    });

}


// SEARCH

function searchGames() {

    const search =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    games.forEach(game => {

        const name =
            game
            .getAttribute("data-name")
            .toLowerCase();

        if (name.includes(search)) {

            game.style.display = "block";

        } else {

            game.style.display = "none";

        }

    });

}


// OPEN GAME

function openGame(gameName) {

    document.getElementById("games").style.display =
        "none";

    document.getElementById("categories").style.display =
        "none";

    document.querySelector(".hero").style.display =
        "none";

    document.getElementById("gamePlayer").style.display =
        "block";

    document.getElementById("gameTitle").innerText =
        gameName;

    const gameContent =
        document.getElementById("gameContent");

    gameContent.innerHTML = `

        <div class="loading-game">

            🎮

            <h2>${gameName}</h2>

            <p>
                This is where your actual HTML5 game
                will be loaded.
            </p>

            <br>

            <button
                onclick="alert('Your game goes here!')"
                style="
                    padding:12px 25px;
                    border:none;
                    border-radius:8px;
                    background:#ffcc00;
                    font-weight:bold;
                    cursor:pointer;
                "
            >
                START GAME
            </button>

        </div>

    `;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// CLOSE GAME

function closeGame() {

    document.getElementById("gamePlayer").style.display =
        "none";

    document.getElementById("games").style.display =
        "block";

    document.getElementById("categories").style.display =
        "block";

    document.querySelector(".hero").style.display =
        "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// HOME

function showHome() {

    closeGame();

}
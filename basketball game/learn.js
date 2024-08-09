    //alert("fuck you, sololearn!");
let homePoints = 0
let guestPoints = 0

let homePointsEl = document.getElementById('home')
let guestPointsEl = document.getElementById('guest')
let resultsEl = document.getElementById('results')

    //let item_text = item.textContent;
    //let button = document.getElementsByName("onclick");
    function myFunction()
    {
        item_text = 'Updated text';
        item.style.color = "blue";
        item.style.border = "solid";
    }

    function updateScore(team, points)
    {
        if (team == 'home')
        {
            homePoints+=points
            homePointsEl.textContent = homePoints
        }
        else 
        {
            guestPoints+=points
            guestPointsEl.textContent = guestPoints
        }
        if (homePoints>=50) endGame('home', homePoints)
        if (guestPoints>=50) endGame('guest', guestPoints)

    }
    function endGame(winner, score)
    {
        resultsEl.textContent = "The winner is " + winner + "! With score: " + score
        resetGame()
    }
    function resetGame()
    {
        homePointsEl.textContent = 0;
        guestPointsEl.textContent = 0;
        homePoints = 0
        guestPoints = 0
    }

    //console.log (item_text);
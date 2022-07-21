//For increasing home team score on the board//
let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreEl = document.getElementById("home-score")
let homeScore = 0

function increaseHomeScoreByOne(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function increaseHomeScoreByTwo(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function increaseHomeScoreByThree(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

//For increasing home team score on the board//

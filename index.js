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

//For increasing guest team score on the board//
let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0

function increaseGuestScoreByOne(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function increaseGuestScoreByTwo(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function increaseGuestScoreByThree(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

// For reseting the score to zero for new game//
function resetScoreToZero(){
    homeScore = 0;
    homeScoreEl.textContent = 0;
    guestScore = 0;
    guestScoreEl.textContent = 0;
}
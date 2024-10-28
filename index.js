

// getting the two elements by id - homeScore  and guestScore

let homeScoreEl = document.getElementById("homeScore")
let guestScoreEl = document.getElementById("guestScore")




// starting score variables

let homeScore = 0
let guestScore= 0

// functions

function plusOne(){
	homeScore += 1
	homeScoreEl.textContent = homeScore
}

function plusTwo(){
	homeScore += 2
	homeScoreEl.textContent = homeScore
}

function plusThree(){
	homeScore += 3
	homeScoreEl.textContent = homeScore
}


function plusOne(){
	guestScore += 1
	guestScoreEl.textContent = guestScore
}

function plusTwo(){
	guestScore += 2
	guestScoreEl.textContent = guestScore
}

function plusThree(){
	guestScore += 3
	guestScoreEl.textContent = guestScore
}

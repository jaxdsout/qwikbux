
let wallet = 0;
let scissorInv = 0;
let mowerInv = 0;
let modMowerInv = 0;
let laborInv = 0;

let scissorUse = false;
let mowerUse = false;
let modMowerUse = false;
let laborUse = false;

const funds = document.querySelector(".wallet")
const killSwitch = document.querySelector(".liquidate")

const teeth = document.querySelector(".teeth")

const buyScissors = document.querySelector(".scissors-e")
const rusty = document.querySelector(".scissors")
const scissorCount = document.querySelector(".inv-scissors")
const sellScissors = document.querySelector(".scissors-a")

const buyMower = document.querySelector(".lawnmower-e")
const mower = document.querySelector(".lawnmower")
const mowerCount = document.querySelector(".inv-lawnmower")
const sellMower = document.querySelector(".lawnmower-a")

const buyModMower = document.querySelector(".modmower-e");
const modMower = document.querySelector(".modmower")
const modMowerCount = document.querySelector(".inv-modmower")
const sellModMower = document.querySelector(".modmower-a")

const buyLabor = document.querySelector(".labor-e");
const labor = document.querySelector(".labor")
const laborCount = document.querySelector(".inv-labor")


teeth.addEventListener("click", function() {
    wallet += 1;
    funds.textContent = wallet;
    checkWin();
});


buyScissors.addEventListener("click", function() {
    if (wallet < 5) {
        alert(`Go munch on some lawns!`)
    } else {
    wallet -= 5;
    funds.textContent = wallet;
    scissorInv += 1; 
    scissorCount.textContent = scissorInv
    scissorUse = true;
    }
})

rusty.addEventListener("click", function() {
    if (scissorUse !== true) {
    } else if (scissorInv > 1){
        wallet += (5 * scissorInv);
        funds.textContent = wallet;
    } else {
        wallet += 5;
        funds.textContent = wallet;
    };
    checkWin();
});

sellScissors.addEventListener("click", function() {
    if (scissorInv > 0) {
        scissorInv -= 1;
        scissorCount.textContent = scissorInv;
        wallet += 2.5;
        funds.textContent = wallet;
    }
})


buyMower.addEventListener("click", function() {
    if (wallet < 25) {
        alert(`Go munch on some lawns!`)
    } else {
    wallet -= 25;
    funds.textContent = wallet;
    mowerInv += 1; 
    mowerCount.textContent = mowerInv;
    mowerUse = true;
    }
});

mower.addEventListener("click", function() {
    if (mowerUse !== true) {
    } else if (mowerInv > 1) {
        wallet += (50 * mowerInv);
        funds.textContent = wallet;
    } else {
        wallet += 50;
        funds.textContent = wallet;
    }
    checkWin();
})

sellMower.addEventListener("click", function() {
    if (mowerInv > 0) {
        mowerInv -= 1;
        mowerCount.textContent = mowerInv;
        wallet += 12.5;
        funds.textContent = wallet;
    }
})



buyModMower.addEventListener("click", function() {
    if (wallet < 250) {
        alert(`Go munch on some lawns!`)
    } else {
    wallet -= 250;
    funds.textContent = wallet;
    modMowerInv += 1; 
    modMowerCount.textContent = modMowerInv;
    modMowerUse = true;
    }
});

modMower.addEventListener("click", function() {
    if (modMowerUse !== true) {
    } else if (modMowerInv > 1) {
        wallet += (100 * modMowerInv);
        funds.textContent = wallet 
    } else {
        wallet += 100;
        funds.textContent = wallet;
    }
    checkWin();
})

sellModMower.addEventListener("click", function() {
    if (modMowerInv > 0) {
        modMowerInv -= 1;
        modMowerCount.textContent = modMowerInv;
        wallet += 125;
        funds.textContent = wallet;
    }
})


buyLabor.addEventListener("click", function() {
    if (wallet < 500) {
        alert(`Go munch on some lawns!`)
    } else {
    wallet -= 500;
    funds.textContent = wallet;
    laborInv += 1; 
    laborCount.textContent = laborInv
    laborUse = true;
    }
});

labor.addEventListener("click", function() {
    if (laborUse !== true) {
    } else if (laborInv > 1) {
        wallet += (250 * laborInv)
        funds.textContent = wallet
    } else {
        wallet += 250;
        funds.textContent = wallet;
    };
    checkWin();
})


function checkWin() {
    if (laborUse !== false && wallet >= 1000){
        alert(`WINNER. You're the head honcho when it comes to cuttin' lawns.`)
    }
}

function killSwitchEngage() {
    if (wallet > 0) {
        wallet = 0;
        scissorInv = 0;
        mowerInv = 0;
        modMowerInv = 0;
        laborInv = 0;
        funds.textContent = wallet;
        scissorCount.textContent = scissorInv;
        mowerCount.textContent = mowerInv;
        modMowerCount.textContent = modMowerInv;
        laborCount.textContent = laborInv;
    }
}
killSwitch.addEventListener("dblclick", killSwitchEngage);
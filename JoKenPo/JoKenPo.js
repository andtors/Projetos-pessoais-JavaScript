
let rock = false
let paper = false
let scissor = false

generateRandom()

function generateRandom(){
    let randomNumb = Math.random() * 3
    if (Math.ceil(randomNumb) === 1) {
        rock = true
    } if (Math.ceil(randomNumb) === 2) {
        paper = true
    } if (Math.ceil(randomNumb) === 3) {
        scissor = true
    }
}


function reset(){
    rock = false
    paper = false
    scissor = false
    generateRandom()
}

document.querySelector('[quadro1]').onclick = () => {
    rock = true
    winner(rock, paper, scissor)
}
document.querySelector('[quadro2]').onclick = () => {
    paper = true
    winner(rock, paper, scissor)
}
document.querySelector('[quadro3]').onclick = () => {
    scissor = true
    winner(rock, paper, scissor)
}

function winner(rock, paper, scissor) {
    if (rock === true && paper === true && scissor === false) {
        document.querySelector('[resultado]').innerHTML = 'Papel ganhou!'
        return reset()
        
    }
    if (paper === true && scissor === true && rock === false) {
        document.querySelector('[resultado]').innerHTML = 'Tesoura ganhou!'
        return reset()
    }
    if (scissor === true && rock === true && paper === false) {
        document.querySelector('[resultado]').innerHTML = 'Pedra ganhou!'
        return reset()
    }
    else {
        document.querySelector('[resultado]').innerHTML = 'Empate!'
        return reset()
    }
    
}

console.log(rock, paper, scissor)



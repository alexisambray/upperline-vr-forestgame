const clickyBox = document.querySelector('#clickyBox')
const fruit = document.querySelector('#fruit')
let raining = true
let myVar
let basket = document.querySelector('#basket')
let SCORE = 0

console.log(clickyBox)

clickyBox.addEventListener('click', e => {
   if (raining === true) {
       console.log('is true')
       myVar = setInterval(startFallingFruit, 1000)
   }
   
   if (raining === false) {
       console.log('is false')
       myStopFunction()
   }
   
    raining = !raining
    console.log("button has been clicked")
    
})


function myStopFunction() {
    clearInterval(myVar);
}

function startFallingFruit(){
       // finds the position where the fruit will fall
        let xPosition = Math.floor(Math.random() * 20) -10
        let yPosition = 10
        let zPosition = Math.floor(Math.random() * 20) -10
        // creates the fruit
        let fruitHTML = document.createElement('a-entity')
        fruitHTML.setAttribute('position', `${xPosition} ${yPosition} ${zPosition}`)
        fruitHTML.setAttribute('scale', '0.09 0.09 0.09')
        fruitHTML.setAttribute('dynamic-body', '')
        fruitHTML.setAttribute('gblock', 'https://poly.google.com/view/4tOmpD9-xsV')
        // add fruit to the page
        
        fruit.appendChild(fruitHTML)
        console.log("added fruit")
        
        fruitHTML.addEventListener('click', function(e){
            console.log("fruit hit")
            console.log(e.target)
            fruit.removeChild(fruitHTML)
            let scoreElement = document.querySelector('#scoreThingee')
            console.log(scoreElement)
            SCORE = SCORE + 1
            let newScore = 'Score: ' + SCORE
            console.log(newScore)
            scoreElement.setAttribute('value',  newScore)            

        })
}

  

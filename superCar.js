// depending on the ratio determine if car is a supercar  or not 
// if less than 1 give back "Your car is not that special"
// if  1 and above give back "You own a SuperCar"



function horsePowerToWeight(horsePower,weight){
    let hpw = horsePower/weight

    return hpw >= 1 ? "You own a SuperCar" :"Your car is not that special";
}


const hp = process.argv[2]
const weight = process.argv[3] 
const answer = horsePowerToWeight(hp, weight)

function howFast(MPH){
    return MPH >= 190 ? "Oh you're FAST FAST": "Join the club Bucko"
}


//console.log(howFast())


const speed = process.argv[4]

console.log(horsePowerToWeight(hp,weight))
console.log(howFast(speed))
//console.log(answer)
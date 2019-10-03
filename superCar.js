// depending on the ratio determine if car is a supercar  or not 
// if 1 give back not that special
// if above certain value give back supercar


function horsePowerToWeight(horsePower,weight){
    let hpw = horsePower/weight

    return hpw >= 1 ? "You own a SuperCar" :"Your car is not that special";
}

const hp = process.argv[2]
const weight = process.argv[3] 



console.log(horsePowerToWeight(hp, weight))
// depending on the ratio determine if car is a supercar  or not 
// if less than 1 give back "Your car is not that special"
// if  1 and above give back "You own a SupeCar"



function horsePowerToWeight(horsePower,weight){
    let hpw = horsePower/weight

    return hpw >= 1 ? "You own a SuperCar" :"Your car is not that special";
}

const hp = process.argv[2]
const weight = process.argv[3] 



horsePowerToWeight(hp, weight)
// depending on the ratio determine if car is fast or not 
// if below certain value give back " slow"
// if above certain value give back "pretty fast"
function horsePowerToWeight(horsePower, weight){
    let hpw = horsePower/weight
    return hpw > 1.0 ? "You own a SuperCar" :"Your car is not that special";
 
}
 
const hp = process.argv[2]
const wght =process.argv[3] 


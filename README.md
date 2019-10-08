Super Car 

### The Super Toxic SuperCar App

The Super Toxic SuperCar Ap will tell you whether your car is a "SuperCar" in a sarcastic and judgemental way. It can also judge if your car us fast or not in an elitist fashion.

### Example 
function horsePowerToWeight(horsePower,weight){
    let hpw = horsePower/weight

    return hpw >= 1 ? "You own a SuperCar" :"Your car is not that special";
}

### The Setup
    1. Fork the repo and clone in terminal
    2. make sure you are running node
    3. type node superCar.js (car Horsepower)(Car weight) (car top Speed)
    4. you will receive feed back based on these variables.

![alt-text](Screen&#32;Shot&#32;2019-10-08&#32;at&#32;12.29.21&#32;AM.png)


If you need a reminder how to use `process.argv`, remember that we can use indices to grab different parts of it. Every _space-separated string_ the user writes after `node [filename].js` will be there, _starting at index 2_. (Index 0 is the string `'node'` and index 1 is the string containing your filename.) Importantly, they'll all come in as strings, so if you want booleans or numbers, you'll have to do conversion of one kind or another!

### Some Possible Apps To Make

Please feel free to use these as jumping off points to something else or to more extended versions of these! In fact, please make the best, most feature-filled version of whatever you're doing. Now and always. Please and thank you

* Guessing Game

It takes in two numbers, a max and a guess. It calculates a random integer from 1 to the max (check out `Math.random()`!) and then checks it against the guess made, returning whether the user guessed right or not!

* Converter

The easy version of this is fahrenheit and celsius converters we made. The middle option is one that can take in as a separate argument the direction the conversion is going--are we converting to fahrenheit or celsius? The great app could convert not just temperature, but weight, size, length, etc. Then you would need a third argument--what are you converting _from_? With celsius/fahrenheit it's always the other one, but we could even convert from or to degrees _kelvin_, and there are many, many different units of length. Do as much as you can!

* Bill Split Calculator

This one would take in an overall bill, a tip percentage, and how many ways to split it, and calculates how much each party owes. For a really good version of this, you'd want to make the tip and how many ways to split it _optional_ parameters, so they could easily just figure the tip on their solo meal, or split it some number of ways with a default tip percentage.

* Basic Calculator

This one takes in two numbers and an operation and performs that operation on those numbers. The four basic arithmetic operations are good, but make sure to throw mod in there. Some quick notes on this one:

1. Think about how YOU would want to use a command line calculator. Make it as user-friendly as possible! What ways could someone ask a computer to add two numbers? How many of those ways should you consider?
2. **DON'T USE EVAL.** Some solutions you might duck on this will tell you to use `eval`. It's not only the easy way out that won't teach you anything about branching logic, but it's actually a _hugely_ problematic JavaScript function from a security standpoint.


### Other Ideas

Run anything else you want to do by us! As long as it's not absurdly easy or unrealistically time-consuming, we'll probably okay it.

Excelsior!
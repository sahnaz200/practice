//Scope – where we can access data, variables , functions.
//Es5 – 2 scopes are there. Global and functional/Local

var a="aa"; // this variable is of global scope. Global variables can be accessed anywhere, in another file also.

function abc(){
    var b="bb"; // this variable can not be used outside this function, this a functional/local scope
    var role='hr';
    if(role == 'hr'){
        var all_salaries = []
        let all_salaries1 = []
    }
    console.log("all salaries", all_salaries); // this will work
    console.log("all salaries", all_salaries1); // this will not work
}

// let introduces block level scoping - if something is declared inside a block it will limited to that block only







console.log("Our trainer is ", Trainer); // undefined - means we know that Trainer is a variable but what is the value we do not know
var Trainer = 'Ashu Lekhi'


console.log("Our trainer is ", Trainer1); // Error : not defined - means we do not know that Trainer1 is a variable or const or function




// in JS all variable declaration are take to the top of the code, this is known as variable hoisting. Below is the example,
//var Trainer2 - this line will be automatically excute at top of the code when we run this code.
console.log("Our trainer is ", Trainer2); // undefined
var Trainer2 = 'Ashu Lekhi'





console.log("Our trainer is ", Trainer3); // Error : cannot access 'Trainer3' before initialization
let Trainer3 = 'Ashu Lekhi'


if(true){
    let reacttrainer = 'ashu'
}
console.log(reacttrainer) // error : not defined








var trainer ='Ashu lekhi'
function abc(){
    console.log(trainer) 
}
abc() //Ashu lekhi

// 'trainer' does not have local declation that's why it went outside(global) for search
// It will never ever go outside for seach if declaration is done inside the function

var trainer1 ='Ashu lekhi'
function abc(){
    //var trainer1 - this line will be automatically excute at top of the code when we run this code.
    console.log(trainer1) 
    var trainer1 = 'ashu'
}
abc() //Undefined



// constants are the fixed values, we cannot change it's value
const Port = 7000
Port = 3000 //Error



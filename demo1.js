
//we cannot access these functions outside the file as these are declared as let, so we can use export to use it outside the file
/*let getFlights = function(){

}

let searchFlights = function(){
    
}*/



//export is to send it outside the file
//import is to bring inside the file
export let getFlights = function(){

}

export let searchFlights = function(){
    
}

let bookFlights = function(){

}

bookFlights()

// In every file there can be one keyword known as default

//export default Traninee_name = 'ashu'

export default function(){
    console.log("default function")
}
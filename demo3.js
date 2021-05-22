
export let getData = function(){

}



// using var keyword also we cannot call getData1() in another file. Using var we can get it in window object only. 
//But in node js there is no window object that's why to call this function from another file we need to user 'export'. It can be var or let does not matter.
var getData1 = function(){

}


export default function(){
    console.log("hello")
}


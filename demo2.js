import name, {getFlights, searchFlights} from "./demo1.js"  // meaning of this line is - whatever is written inside demo1.js that will be excuted 
//and we can call functions getFlights and searchFlights from this file(demo2.js)


import name, {GETDATA} from "./demo3.js" // wrong (except deafult all are case sensitive)
import name, {getData} from "./demo3.js" // correct

// default thing we can get it by any name. 
// but which are not default to get that we need to write exact same name(CASE SENSITIVE) like getFlights, searchFlights,  getData 
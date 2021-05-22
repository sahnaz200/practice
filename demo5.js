







var employee =
{
company: 'xyz'
}
var emp1 = Object.create(employee);
delete emp1.company 
console.log(employee);
console.log(emp1);



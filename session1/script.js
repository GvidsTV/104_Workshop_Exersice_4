/* 

console.time('Hi')
console.log('Hello')
console.error('Error....')
console.warn('Warning....')
onsole.log('Hello')
console.error('Error....')
console.warn('Warning....')
onsole.log('Hello')
console.error('Error....')
console.warn('Warning....')
onsole.log('Hello')
console.error('Error....')
console.warn('Warning....')
console.time('Hi')

*/

/*
// varibles var let const

//var is the old way

var studentName="Daniel"; // camelCase
console.log(studentName);

var student_name="Rene"; // under_score
console.log(student_name);

//let is new

let clientName = "Gareth"
clientName = "Joel";

//const is useful for selecting parts of html

const client = "Christian";
*/

// Strings 

/* let band= "Metallica", song="Enter Sandman";

let name;

name = band+ ' ' + song // concat the strings
console.log(name);

name = name.concat(" ","is great !");

console.log(name);

name= name.toUpperCase();
console.log(name);

name= name.toLowerCase();
console.log(name);

console.log(`${band} ${song}`); // template string
 */

 /*
let name;
let activity= "I'm learning JavaScript in FSDI";

name=activity.includes('JavaScript');
// name=activity.split(' '); //csv

// let interest= "Read, walk, listen to music, programing learning"

// name=interest.split(',');
console.log(activity);

//let email="g.butler85gmail.com";
//name=email.includes('@');
console.log(activity.repeat(5));




let num1=5;
let num2=6;

let result;
result=num1+num2;
result=result*num1;

console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);

result= Math.round(2.55);
result=Math.floor(2.99);
result=Math.ceil(2.1);

result=Math.sqrt(144);
result=Math.min(10,2,5,8,7,6);
result=Math.max(10,2,5,8,7,6);


console.log(result);



let num1=50,
    num2="10",
    num3="two",
    num4="20.20";

 let data;
 
 console.log(num1+Number(num2));

 // <h2> ${nameVariable} 
 console.log(num1+parseFloat(num4));

 console.log(Number(num3));

 data= Number("20.456");

 data=Number("Hellp");
  console.log(data);


  let data= 9987437456901234;
  console.log(data);
  data = String(data);

  console.log(data);
  console.log(data.length);


  

  const name="Dominique";
  
  console.log(typeof name);

  const age=32;

  console.log(typeof age);

  const student= true;
  
  console.log(typeof student);

  let languages = [ 'HTML', 'CSS', 'JS', 'Python']; //array


  console.log(typeof languages);

  let person={
      name:'Christopher',
      country: 'USA'

      
  }
     console.log(person)
     */

     const numbers = [10,20,30,40,50,60]
     console.table(numbers);

     const months=new Array('Jan','Feb','March','April');
     console.log(months);
     console.log(months[2]);

     months[4]="May";

     console.table(months);

     months.push("June");
     months.push("July");
     console.table(months);

     months.unshift('Month 0');

     console.table(months);

     // delete element

     months.pop();
     months.shift();
     console.table(months);

     // delete severl elements

     months.splice(1,2);
     console.table(months);

     console.table(months.reverse());
     console.table(months.sort());





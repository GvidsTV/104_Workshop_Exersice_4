console.log("Executed");

/* 
// loop

for(let i=0; i<10;i++){
    // console.log("Numbers"+i ); old way
    console.log(`Number: ${i}`);

}

const cart=['product1','product2','product3','product4','computer','Headset'];

console.table(cart);
// travel the array


// j=postion (idex)
// intelligent way
for(let j=0; j<cart.length; j++){
    console.log(`Products: ${cart[j]}`);

}

// :(
    console.log("List of products:" );
    console.log(`Products: ${cart[0]}`);
    console.log(`Products: ${cart[1]}`);
    console.log(`Products: ${cart[2]}`);
    console.log(`Products: ${cart[3]}`);
    console.log(`Products: ${cart[4]}`); 

    /*/

const logged = true;    

if(logged == true){
    console.log('Welcome to the system');

} else{
    console.log('Register into the system');

}

// === means the same value and smae datatype

const age=100;
if(age===100){
    console.log("You are a superhero");

} else{
    console.log("You are a mortal");

} 

let cash=600;
let totalCart=1000;
let card=false;

if(cash>totalCart){
    console.log("Sucessful");

}else if(card==true){
    console.log('The client pay with a debit/credit card');

}else{
    console.log('Failed');
}

let hour=16;
//&& means AND || means OR
if(hour > 0 && hour<= 12){
    console.log('Good morning');

} else if(hour >12 && hour<=18){
    console.log('Good Afternoon');

} else if(hour >18 && hour<=24){
    console.log('Good Night');
}else{
    console.log('Invalid hour');
}

//Exercise: display on console Good afternoon and good night 

//const method = 'debitcard';
// switch case
// switch (method)
const option = '3';
switch(option){ 
    case '1':
        // console.log(`Payment method: ${method}`);
        console.log(option);
        break;
    case '2':
        // console.log(`Payment method: ${method} wait a moment ...`);
        console.log(option);
        break;
    case '3':
        //console.log(`Payment method: ${method} ... Invalid`);
        console.log(option);
        break;
    default:
        console.log("Invalid option ... :( ");
        break;
    
}

function hello(){
    //function body
    console.log("Hello world ... ")
}

/* let traveling = function(destination){
    return 'Traveling to ... ' +
    destination;
}
*/

// arrow function
let traveling = destination => 'Traveling to ...' + destination; 

let travel;

travel= traveling('Italy');

console.log(travel);

const sum = (a,b) => a=b;

console.log(sum(5,2));

//autocalling function
(function(topic){
    console.log('I am learning'+topic);
})('JS');



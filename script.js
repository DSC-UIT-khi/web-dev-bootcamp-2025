// // // Variable typles 

// // // cost constant value through out the program 
// // const a = 100;

// // //var (variable)
// // var c = 200

// // //let
// // let b = 100


// // // DATATYPES 
// // boolen = true //boolean 
// // b = 100 //number
// // string = 'hello' //string
// // na = null //null
// // let x; //undefined


// arr = [1,2,3,4,5];
// // arr.push(6)
// // console.log(arr)
// // arr.pop()
// // console.log(arr)


// // arr.shift()
// // console.log(arr)
// // arr.unshift(1)
// // console.log(arr)

// // let obj = {
// //     name : 'jhon',
// //     age : 22
// // }
// // console.log(obj)


// // let x = 10;
// // let y = 11;

// //operators 
// // console.log('addition ' , x + y)
// // console.log('subtraction ', x - y)
// // console.log('mul ', x*y)
// // console.log('div ', x/y)
// // console.log('mod ', y%x)

// // i = i-1 
// i++
// // i--

// // i**2  i raised tp  power 2 

// // //logical operators 
// // let t = true;
// // let f = false;

// // console.log('and ' , t && f) //and
// // console.log('or ' , t || f) //or 
// // console.log('not ' , !t) //not 


// //comparison operators


// // console.log(typeof(x))
// // console.log(typeof(y))

// // console.log('== ' , x == y)
// // console.log('=== ' , x === y)
// // console.log('!= ' , x != y)
// // console.log('!== ' , x !== y)
// // console.log('>' , x > y)
// // console.log('>' , x < y)
// // console.log('>' , x >= y)
// // console.log('>' , x <= y)

// //if else statements

// // if (x === y){
// //     console.log('x is equal to y strictly')
// // }
// // else if (x == y){
// //     console.log('x is equal to y loosely')
// // }
// // //condtion ? true : false
// // x===y ? console.log('x is equal to y strictly' ) : console.log('x is not equal to y strictly')



// // else {
// //     console.log('x is not equal to y')
// // }

// //switch statmenets 
// let x = 1;

// // switch (x){
// //     case 1:
// //         console.log('x is 1')
// //         break;
// //     case 2:
// //         console.log('x is 2')
// //         break;
// //     case 3:
// //         console.log('x is 3')
// //         break;
// //     default:
// //         console.log('x is not 1 or 2 or 3')
// //         break; 
// // }

// //for loops 

// // for(let i = 0; i <= 10 ; i++){
// //     console.log(i)
// //     if(i == 5){
// //         console.log('break')
// //         break;
// // }
// // }

// // //while loops
// // let i = 11;

// // // while(i <= 10){
// // //     console.log(i);
// // //     i++;
// // // }

// // //do while loops 
// // do{
// //     console.log(i);
// //     i++;
// // }while(i <= 10)

// // console.log(typeof(a))
// // console.log(typeof(boolen))
// // console.log(typeof(string))
// // console.log(typeof(na))
// // console.log(typeof(x))

// //normal functions

// // function printname(firstname , lastname ){
    
// //     return (`hello ${firstname} ${lastname}`)
// // }
// // let a = printname('jhon' , 'doe')
// // console.log(a)

// //arrow functions 

// const  add = (a,b) => a+b;

// // callback functions

// // function greet(name , callback){
// //     console.log(`hello ${name}`)
// //     callback();
// // }

// function goodbye(){
//     console.log('goodbye')
// }

// // greet('jhon' , goodbye);


// function delayedhello (callback){
//     console.log('hello')
//     setTimeout(() => {
//         callback();
//     }, 3000)
// }

// delayedhello(goodbye);




// let title = document.querySelectorAll('title'); //first found title element
// console.log(title[0].innerText);
// let parent = document.querySelector('product-card')
// let button = document.getElementById('btn-3');

// let newelemt = document.createElement('p');
// newelemt.innerText = 'hello'

// button.addEventListener('click' , () => {
//     document.body.appendChild(newelemt)
// })


// // setTimeout(() => {
// //     console.log('1');
// //     setTimeout(() => {
// //         console.log('2');
// //         setTimeout(() => {
// //             console.log('3');     
// //     })
// // })
// // })

// let mypromis = new Promise((resolve , reject) =>{
//     let done = false;
//     setTimeout(() => {
//         if(done){
//             resolve('the task was executed properly')
//         }
//         else{
//             reject('the task was not executed properly')
//         }
//     },3000)
// }   
// )

// mypromis
// .then(response => {
//     console.log(response)
// })
// .catch(error => {
//     console.log(error)
// })

// fetch("https://jsonssplaceholder.typicode.com/todos//1")
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error))


// async function fetchdata(){
//     try {
//         let response = await fetch ("https://jsonplaceholder.typicode.com/todos//1");
//         let data = await response.json();
//         console.log(data)
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// fetchdata()










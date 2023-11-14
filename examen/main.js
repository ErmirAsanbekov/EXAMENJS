//? 1
let numberVariable = 42; 
let stringVariable = "Привет, мир!";
let booleanVariable = true; 


console.log(numberVariable);
console.log( stringVariable);
console.log( booleanVariable);



//? 2 

let stringNumber = "42";
let convertedNumber = parseInt(stringNumber);

console.log( convertedNumber);


let number = 123;
let convertedString = String(number);

console.log( convertedString);




//? 3

let arr = [12, 45, 63, 73, 52]

for(let i = 0; i < arr.length; i++) {
    console.log( arr[i])
}

//? 4

const obj = {
    name: 'Aidar',
    age: 21,
    city: "Bishkek"
}

const obj2 = obj

obj.age = 30

console.log(obj2)

//? 5
function checkEvenNumber(number) {
    return new Promise((resolve, reject) => {
      if (number % 2 === 0) {
        resolve("Число четное");
      } else {
        reject(new Error("Число нечетное"));
      }
    });
  }
  
  const inputNumber = 42;
  
  checkEvenNumber(inputNumber)
    .then((result) => {
      console.log(result); 
    })
    .catch((error) => {
      console.error("Ошибка: " + error.message); 
    });



//? 6 

let i = 1;

while (i <= 10) {
	console.log(i);
	i++;
}

//? 7

const arrowFunction = () => {
    console.log('Hello World!');
    };
    arrowFunction();
    
    function declarationFunction() {
    console.log('Hello World!');
    }
    declarationFunction();
    
    const expressionFunction = function () {
    console.log('Hello World!');
    };
    
    expressionFunction();


//? 8

const successfulPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve("Успешно выполнен промис");
    }, 1000);
  });
  

  const errorPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
      reject(new Error("Произошла ошибка в промисе"));
    }, 1000);
  });
  
 
  successfulPromise
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error("Ошибка в successfulPromise:", error);
    });
  
  errorPromise
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error("Ошибка в errorPromise:", error);
    });


    //? 9

    let people = [ 
        { name: 'Vasya'},
        { name: 'Murka'},
        { name: 'Varna' },
        { name: 'Kesha' },
        { name: 'Nayda'},
        { name: 'Pufic'},
        { name: 'Randy'},
        { name: 'Askar'}
    ];

    function sortByName(objects) {
        return objects.sort((a, b) => {
           if (a.name < b.name) {
             return -1;
           }
           if (a.name > b.name) {
             return 1;
           }
           return 0;
        });
       }
  
       console.log(sortByName(people))
    

       





   
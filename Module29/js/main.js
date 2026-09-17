//Arrays
// Data types ['', '', '']

// var programmingLanguages=['Javascript', 'PHP', 'Python'];


// console.log(programmingLanguages)

// console.log(programmingLanguages[0])
// console.log(programmingLanguages[1])
// console.log(programmingLanguages[2])


// programmingLanguages.push('Java');
// console.log(programmingLanguages)

// programmingLanguages.pop();
// console.log(programmingLanguages)

// programmingLanguages.unshift('C#');
// console.log(programmingLanguages)

// programmingLanguages.shift();
// console.log(programmingLanguages)

// programmingLanguages.splice(0,2 ,'Ruby');
// console.log(programmingLanguages)


// console.log(Math.random()*5);
// console.log(Math.floor(Math.random()*5));

// var places = ["Lodon", "Paris", "New york" , "Berlin"]

// //destrukturimi

// var[firstPlace.secondPlace,thirdPlace]  = places;
// console.log(thirdPlace);

// var numbers = [1,2,3,4,5,6,7,8,9,10]

// var [firstNumber,secondnumber; ...othersNumber] = numbers;


// console.log(firstNumber)

// console.log(secondNumber)

// console.log(otherNumber.toString())

///komentimm


// var programmingLanguages=['Ylli', 'Drini', 'Joni', 'Jaani', 'Darisi'];

// console.log(programmingLanguages[0])
//  console.log(programmingLanguages[1])


// console.log(programmingLanguages)

//  programmingLanguages.push('Kaoni');
//  console.log(programmingLanguages)

//  programmingLanguages.pop();
//  console.log(programmingLanguages)

//  programmingLanguages.unshift('C#');
//  console.log(programmingLanguages)

//  programmingLanguages.shift();
//  console.log(programmingLanguages)

// programmingLanguages.splice(0,2 ,'Ruby');
//  console.log(programmingLanguages)



const strings = [
  "Hello",
  "JavaScript",
  "Hi",
  "This is a longer string",
  "Welcome!"
];


const randomIndex = Math.floor(Math.random() * strings.length);
console.log(randomIndex)

const [randomString] = strings.splice(randomIndex, randomIndex + 1,'Done');


if (randomString) {
  console.log("Randomly selected string:", randomString);
} else {
  console.log("No string was found at the selected index.");
}


console.log()

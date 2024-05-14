const numbers = [1, 1, 2, 3, 5];
const words = ["planes", "trains", "automobiles"];
const pets = ["goldfish", "dog", "turtle", "tiger"]


const result = numbers.map(number => number + 5);
console.log(result); 

const result1 = words.map(word => word.slice(0, -1));
console.log(result1); 

const result2 =words.map(word => word.slice(0,1));
console.log(result2);


const result3 = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
console.log(result3);

const result4 = pets.filter(pet =>pet.length<=5);
console.log(result4);

const result5 =pets.filter(pet => pet.startsWith('t'));
console.log(result5);

const result6 =numbers.filter(num=> num>4);
console.log(result6);

const result7 = numbers.filter(num=>num%2==0);
console.log(result7);

let words = ['Cat', 'Dog', 'Horse', 'Dog', 'Chicken', 'Cat', 'Dog', 'Cat'];

let frequencies = {};

for(let index=0; index<words.length; index++)
{
    frequencies[words[index]] = 0;
}


console.log(Object.keys(frequencies));
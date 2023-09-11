let findOddnumbers = function (numbers){
  let Oddnumbers=[];
  for(let number of numbers){
    if(number % 2 == 1){
      Oddnumbers.push(number);

    }
  }
  return Oddnumbers;
}
let numbers = [2, 5, 7, 8, 9, 14, 19 ]

console.log(findOddnumbers(numbers));
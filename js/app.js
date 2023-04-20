function transformString(inputString) {
    let transformedString = '';
    for (let i = 0; i < inputString.length; i++) {
      if (i > 0) {
        transformedString += '-';
      }
      transformedString += inputString[i].toUpperCase();
      for (let j = 0; j < i; j++) {
        transformedString += inputString[i];
      }
    }
    return transformedString;
  }


  let result = transformString('hello');
console.log(result); 





// assigment 2

function dishes(recipe, availableIngredients) {
  let maxDishes = Infinity;
  for (let ingredient in recipe) {
    if (availableIngredients[ingredient]) {
      maxDishes = Math.min(maxDishes, Math.floor(availableIngredients[ingredient] / recipe[ingredient]));
    } else {
      maxDishes = 0;
      break;
    }
  }
  return maxDishes;
}


let recipe1 = {flour: 500, sugar: 200, eggs: 1};
let availableIngredients1 = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
let result1 = dishes(recipe1, availableIngredients1);
console.log(result1); // 2

let recipe2 = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
let availableIngredients2 = {sugar: 500, flour: 2000, milk: 2000};
let result2 = dishes(recipe2, availableIngredients2);
console.log(result2); // 3
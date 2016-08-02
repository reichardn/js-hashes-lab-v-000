'use strict';

function addIngredient(recipe, ingredient, amount) {
  recipe[ingredient] = amount;
  return recipe;
}

function removeIngredient(r, i) {
  delete r[i];
  return r;
}

function updateIngredient(r, i, a) {
  return addIngredient(r,i,a)
}

function readRecipe(r) {
  for (i in r) {
    console.log(`this recipe calls for ${r[i]} of ${i}`)
  }
}
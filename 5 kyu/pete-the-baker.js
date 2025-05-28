// https://www.codewars.com/kata/525c65e51bf619685c000059

function cakes(recipe, available) {
    let amount = Infinity;
    for (const ingredient of Object.keys(recipe)) {
        const availableIngredient = available[ingredient] || 0;
        amount = Math.min(amount, Math.floor(availableIngredient / recipe[ingredient]));
    }
    
    return amount;
}
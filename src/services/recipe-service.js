export const recipeService = {

    selectRecipes: function(recipes, keyword, ingredients, appliance, ustensils) {
       
        const keywordInLowercase = keyword.toLowerCase();
        return recipes.filter(r => {
            console.log(r.name);
            const keywordCheck = this.filterByKeyword(r, keywordInLowercase);
            const ingredientsCheck = this.areIngredientsInArray(ingredients, r.ingredients);
            return keywordCheck && ingredientsCheck;
        });
    },

    filterByKeyword: function(recipe, keywordInLowercase) {
        return recipe.description.includes(keywordInLowercase)
        || recipe.name.includes(keywordInLowercase)
        || this.isKeywordIncludedInIngredientsArray(keywordInLowercase, recipe.ingredients)
        || this.isKeywordIncludedInUstensilsArray(keywordInLowercase, recipe.ustensils)
        || recipe.appliance.includes(keywordInLowercase);
    },

    isKeywordIncludedInIngredientsArray: function(word, ingredientsArray) {
        return ingredientsArray.some(elt => elt.ingredient.toLowerCase().includes(word));
    },
    
    isKeywordIncludedInUstensilsArray: function(word, ustensilsArray) {
        return ustensilsArray.some(elt => elt.toLowerCase().includes(word));
    },

    areIngredientsInArray: function(ingredients, ingredientsArray) {

        for(let i = 0; i < ingredients.length; i++) {
            const ingredientInArrayCheck = this.isIngredientInArray(ingredients[i], ingredientsArray);
            if(!ingredientInArrayCheck){
                return false;
            }
        }
        return true;
       
    },

    isIngredientInArray: function(ingredient, ingredientsArray) {
        for(let i = 0; i < ingredientsArray.length; i++) {
            if(ingredient.toLowerCase() === ingredientsArray[i].ingredient.toLowerCase()){
                return true
            } 
        }
        return false;
        
    }
     
}
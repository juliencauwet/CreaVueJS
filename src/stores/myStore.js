import { defineStore } from 'pinia';
import { recipes } from '@/assets/recipes';
import { recipeService } from '@/services/recipe-service';

export const useMyStore = defineStore('myStore', {
  state: () => ({
    selectedRecipes: recipes,
  }),
  getters: {

  },
  actions: {
    filterRecipes( keyword, ingredients, appliance, ustensils) {
      this.selectedRecipes = recipes;
      this.selectedRecipes = recipeService.selectRecipes(this.selectedRecipes, keyword, ingredients, appliance, ustensils);
    }
  },
});

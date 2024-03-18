import { defineStore } from 'pinia';
import { recipes } from '@/assets/recipes';

export const useMyStore = defineStore('myStore', {
  state: () => ({
    selectedRecipes: recipes,
  }),
  getters: {

  },
  actions: {
    
  },
});

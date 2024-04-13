import { acceptHMRUpdate, defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => {
    return {
      semences: [
        "Wheat",
        "Corn",
        "Tomato",
        "Carrot",
        "Potato",
        "Lettuce",
        "Soybean",
        "Rice",
        "Onion",
        "Cabbage",
        "Broccoli",
        "Cucumber",
        "Pumpkin",
        "Spinach",
        "Pepper",
        "Bean",
        "Pea",
        "Radish",
        "Beet",
        "Eggplant"
      ],
      invocations: {
        vent: {
          hiver: {
            qualite: +3,
            quantite: 0,
          },
          printemps: {
            qualite: 0,
            quantite: -1
          },
          ete: {
            qualite: +3,
            quantite: -2
          },
          automne: {
            qualite: 0,
            quantite: -1
          }
        }
      }
    }
  },
  getters: {
    getSemences: (state) => {
      return state.semences
    },
    getInvocations: (state) => {
      return state.invocations
    }
  },
  actions: {

  }
});
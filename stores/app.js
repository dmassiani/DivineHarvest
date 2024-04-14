import { acceptHMRUpdate, defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => {
    return {
      playerSemences: [],
      season: "winter",
      tunes: 0,
      malus: {
        quantity: 0,
        quality: 0,
        grow: 100
      },
      semences:
      [
        {
          name: "Wheat",
          price: 1,
          winter: {
            quality: 1,
            quantity: 12
          },
          spring: {
            quality: +3,
            quantity: 23
          },
          summer: {
            quality: 1,
            quantity: 20
          },
          autumn: {
            quality: +1,
            quantity: 16
          }
        },
        {
          name: "Corn",
          price: 1,
          winter: {
            quality: 1,
            quantity: 12
          },
          spring: {
            quality: +3,
            quantity: 23
          },
          summer: {
            quality: 1,
            quantity: 20
          },
          autumn: {
            quality: +1,
            quantity: 16
          }
        },
        {
          name: "Tomato",
          price: 1,
          winter: {
            quality: 1,
            quantity: 12
          },
          spring: {
            quality: +3,
            quantity: 23
          },
          summer: {
            quality: 1,
            quantity: 20
          },
          autumn: {
            quality: +1,
            quantity: 16
          }
        },
        {
          name: "Carrot",
          price: 1,
          winter: {
            quality: 1,
            quantity: 12
          },
          spring: {
            quality: +3,
            quantity: 23
          },
          summer: {
            quality: 1,
            quantity: 20
          },
          autumn: {
            quality: +1,
            quantity: 16
          }
        },
        {
          name: "Potato",
          price: 1,
          winter: {
            quality: 1,
            quantity: 12
          },
          spring: {
            quality: +3,
            quantity: 23
          },
          summer: {
            quality: 1,
            quantity: 20
          },
          autumn: {
            quality: +1,
            quantity: 16
          }
        },
        {
          name: "Lettuce",
          price: 1,
          winter: {
            quality: 1,
            quantity: 12
          },
          spring: {
            quality: +3,
            quantity: 23
          },
          summer: {
            quality: 1,
            quantity: 20
          },
          autumn: {
            quality: +1,
            quantity: 16
          }
        },
        {
          name: "Soybean",
          price: 1,
          winter: {
            quality: 1,
            quantity: 12
          },
          spring: {
            quality: +3,
            quantity: 23
          },
          summer: {
            quality: 1,
            quantity: 20
          },
          autumn: {
            quality: +1,
            quantity: 16
          }
        },
        {
          name: "Rice",
          price: 1,
          winter: {
            quality: 1,
            quantity: 12
          },
          spring: {
            quality: +3,
            quantity: 23
          },
          summer: {
            quality: 1,
            quantity: 20
          },
          autumn: {
            quality: +1,
            quantity: 16
          }
        },
        {
          name: "Onion",
          price: 1,
          winter: {
            quality: 1,
            quantity: 12
          },
          spring: {
            quality: +3,
            quantity: 23
          },
          summer: {
            quality: 1,
            quantity: 20
          },
          autumn: {
            quality: +1,
            quantity: 16
          }
        },
        {
          name: "Cabbage",
          price: 1,
          winter: {
            quality: 1,
            quantity: 12
          },
          spring: {
            quality: +3,
            quantity: 23
          },
          summer: {
            quality: 1,
            quantity: 20
          },
          autumn: {
            quality: +1,
            quantity: 16
          }
        },
        {
          name: "Broccoli",
          price: 1,
          winter: {
            quality: 1,
            quantity: 12
          },
          spring: {
            quality: +3,
            quantity: 23
          },
          summer: {
            quality: 1,
            quantity: 20
          },
          autumn: {
            quality: +1,
            quantity: 16
          }
        },
        {
          name: "Cucumber",
          price: 1,
          winter: {
            quality: 1,
            quantity: 12
          },
          spring: {
            quality: +3,
            quantity: 23
          },
          summer: {
            quality: 1,
            quantity: 20
          },
          autumn: {
            quality: +1,
            quantity: 16
          }
        },
        {
          name: "Pumpkin",
          price: 1,
          winter: {
            quality: 1,
            quantity: 12
          },
          spring: {
            quality: +3,
            quantity: 23
          },
          summer: {
            quality: 1,
            quantity: 20
          },
          autumn: {
            quality: +1,
            quantity: 16
          }
        },
        {
          name: "Spinach",
          price: 1,
          winter: {
            quality: 1,
            quantity: 12
          },
          spring: {
            quality: +3,
            quantity: 23
          },
          summer: {
            quality: 1,
            quantity: 20
          },
          autumn: {
            quality: +1,
            quantity: 16
          }
        },
        {
          name: "Pepper",
          price: 1,
          winter: {
            quality: 1,
            quantity: 12
          },
          spring: {
            quality: +3,
            quantity: 23
          },
          summer: {
            quality: 1,
            quantity: 20
          },
          autumn: {
            quality: +1,
            quantity: 16
          }
        },
        {
          name: "Bean",
          price: 1,
          winter: {
            quality: 1,
            quantity: 12
          },
          spring: {
            quality: +3,
            quantity: 23
          },
          summer: {
            quality: 1,
            quantity: 20
          },
          autumn: {
            quality: +1,
            quantity: 16
          }
        },
        {
          name: "Pea",
          price: 1,
          winter: {
            quality: 1,
            quantity: 12
          },
          spring: {
            quality: +3,
            quantity: 23
          },
          summer: {
            quality: 1,
            quantity: 20
          },
          autumn: {
            quality: +1,
            quantity: 16
          }
        },
        {
          name: "Radish",
          price: 1,
          winter: {
            quality: 1,
            quantity: 12
          },
          spring: {
            quality: +3,
            quantity: 23
          },
          summer: {
            quality: 1,
            quantity: 20
          },
          autumn: {
            quality: +1,
            quantity: 16
          }
        },
        {
          name: "Beet",
          price: 1,
          winter: {
            quality: 1,
            quantity: 12
          },
          spring: {
            quality: +3,
            quantity: 23
          },
          summer: {
            quality: 1,
            quantity: 20
          },
          autumn: {
            quality: +1,
            quantity: 16
          }
        },
        {
          name: "Eggplant",
          price: 1,
          winter: {
            quality: 1,
            quantity: 12
          },
          spring: {
            quality: +3,
            quantity: 23
          },
          summer: {
            quality: 1,
            quantity: 20
          },
          autumn: {
            quality: +1,
            quantity: 16
          }
        }
      ],
      selectedSemence: "",
      invocations: [
        {
          name: "wind",
          goddess: false,
          winter: {
            quality: +3,
            quantity: 0,
            grow: 130,
            type: "bad"
          },
          spring: {
            quality: 0,
            quantity: -1,
            grow: 60,
            type: "good"
          },
          summer: {
            quality: +3,
            quantity: -2,
            grow: 50,
            type: "good"
          },
          autumn: {
            quality: 0,
            quantity: -1,
            grow: 10,
            type: "good"
          }
        },
        {
          name: "rain",
          goddess: false,
          winter: {
            quality: +3,
            quantity: 0,
            grow: 130,
            type: "bad"
          },
          spring: {
            quality: 0,
            quantity: -1,
            grow: 60,
            type: "good"
          },
          summer: {
            quality: +3,
            quantity: -2,
            grow: 20,
            type: "good"
          },
          autumn: {
            quality: 0,
            quantity: -1,
            grow: 90,
            type: "good"
          }
        },
        {
          name: "ground booster",
          goddess: false,
          winter: {
            quality: +3,
            quantity: 0,
            grow: 200,
            type: "bad"
          },
          spring: {
            quality: 0,
            quantity: -1,
            grow: 20,
            type: "good"
          },
          summer: {
            quality: +3,
            quantity: -2,
            grow: 90,
            type: "good"
          },
          autumn: {
            quality: 0,
            quantity: -1,
            grow: 50,
            type: "good"
          }
        },
        {
          name: "fog",
          goddess: false,
          winter: {
            quality: +3,
            quantity: 0,
            grow: 10,
            type: "good"
          },
          spring: {
            quality: 0,
            quantity: -1,
            grow: 20,
            type: "good"
          },
          summer: {
            quality: +3,
            quantity: -2,
            grow: 20,
            type: "good"
          },
          autumn: {
            quality: 0,
            quantity: -1,
            grow: 30,
            type: "good"
          }
        },
        {
          name: "lights",
          goddess: false,
          winter: {
            quality: +3,
            quantity: 0,
            grow: 10,
            type: "good"
          },
          spring: {
            quality: 0,
            quantity: -1,
            grow: 20,
            type: "good"
          },
          summer: {
            quality: +3,
            quantity: -2,
            grow: 20,
            type: "good"
          },
          autumn: {
            quality: 0,
            quantity: -1,
            grow: 30,
            type: "good"
          }
        },
        {
          name: "fertility",
          goddess: false,
          winter: {
            quality: +9,
            quantity: 30,
            grow: 3,
            type: "good"
          },
          spring: {
            quality: 30,
            quantity: 30,
            grow: 2,
            type: "good"
          },
          summer: {
            quality: 40,
            quantity: 4,
            grow: 2,
            type: "good"
          },
          autumn: {
            quality: 0,
            quantity: 90,
            grow: 3,
            type: "good"
          }
        },
        {
          name: "storm",
          goddess: true,
          winter: {
            quality: +3,
            quantity: 0,
            grow: 100,
            type: "bad"
          },
          spring: {
            quality: 0,
            quantity: -1,
            grow: 200,
            type: "bad"
          },
          summer: {
            quality: +3,
            quantity: -2,
            grow: 800,
            type: "bad"
          },
          autumn: {
            quality: 0,
            quantity: -1,
            grow: 400,
            type: "bad"
          }
        },
        {
          name: "storm",
          goddess: false,
          winter: {
            quality: +3,
            quantity: 0,
            grow: 10,
            type: "good"
          },
          spring: {
            quality: 0,
            quantity: -1,
            grow: 90,
            type: "good"
          },
          summer: {
            quality: +3,
            quantity: -2,
            grow: 300,
            type: "bad"
          },
          autumn: {
            quality: 0,
            quantity: -1,
            grow: 200,
            type: "bad"
          }
        },
        {
          name: "heatwave",
          goddess: true,
          winter: {
            quality: +3,
            quantity: 0,
            grow: 20,
            type: "good"
          },
          spring: {
            quality: 0,
            quantity: -1,
            grow: 120,
            type: "bad"
          },
          summer: {
            quality: +3,
            quantity: -2,
            grow: 20,
            type: "good"
          },
          autumn: {
            quality: 0,
            quantity: -1,
            grow: 160,
            type: "bad"
          }
        },
        {
          name: "heatwave",
          goddess: false,
          winter: {
            quality: +3,
            quantity: 0,
            grow: 20,
            type: "good"
          },
          spring: {
            quality: 0,
            quantity: -1,
            grow: 90,
            type: "good"
          },
          summer: {
            quality: +3,
            quantity: -2,
            grow: 400,
            type: "bad"
          },
          autumn: {
            quality: 0,
            quantity: -1,
            grow: 160,
            type: "bad"
          }
        },
        {
          name: "hailstorm",
          goddess: true,
          winter: {
            quality: +3,
            quantity: 0,
            grow: 120,
            type: "bad"
          },
          spring: {
            quality: 0,
            quantity: -1,
            grow: 160,
            type: "bad"
          },
          summer: {
            quality: +3,
            quantity: -2,
            grow: 200,
            type: "bad"
          },
          autumn: {
            quality: 0,
            quantity: -1,
            grow: 260,
            type: "bad"
          }
        },
        {
          name: "disease",
          goddess: true,
          winter: {
            quality: +3,
            quantity: 0,
            grow: 400,
            type: "bad"
          },
          spring: {
            quality: 0,
            quantity: -1,
            grow: 300,
            type: "bad"
          },
          summer: {
            quality: +3,
            quantity: -2,
            grow: 230,
            type: "bad"
          },
          autumn: {
            quality: 0,
            quantity: -1,
            grow: 420,
            type: "bad"
          }
        },
        {
          name: "dryness",
          goddess: true,
          winter: {
            quality: +3,
            quantity: 0,
            grow: 400,
            type: "bad"
          },
          spring: {
            quality: 0,
            quantity: -1,
            grow: 300,
            type: "bad"
          },
          summer: {
            quality: +3,
            quantity: -2,
            grow: 230,
            type: "bad"
          },
          autumn: {
            quality: 0,
            quantity: -1,
            grow: 420,
            type: "bad"
          }
        },
        {
          name: "hailstorm",
          goddess: false,
          winter: {
            quality: +3,
            quantity: 0,
            grow: 90,
            type: "good"
          },
          spring: {
            quality: 0,
            quantity: -1,
            grow: 160,
            type: "bad"
          },
          summer: {
            quality: +3,
            quantity: -2,
            grow: 200,
            type: "bad"
          },
          autumn: {
            quality: 0,
            quantity: -1,
            grow: 260,
            type: "bad"
          }
        },
        {
          name: "fire",
          goddess: true,
          winter: {
            quality: +3,
            quantity: 0,
            grow: 60,
            type: "good"
          },
          spring: {
            quality: 0,
            quantity: -1,
            grow: 160,
            type: "bad"
          },
          summer: {
            quality: +3,
            quantity: -2,
            grow: 200,
            type: "bad"
          },
          autumn: {
            quality: 0,
            quantity: -1,
            grow: 260,
            type: "bad"
          }
        },
        {
          name: "fire",
          goddess: true,
          winter: {
            quality: +3,
            quantity: 0,
            grow: 10,
            type: "good"
          },
          spring: {
            quality: 0,
            quantity: -1,
            grow: 160,
            type: "bad"
          },
          summer: {
            quality: +3,
            quantity: -2,
            grow: 200,
            type: "bad"
          },
          autumn: {
            quality: 0,
            quantity: -1,
            grow: 260,
            type: "bad"
          }
        },
        {
          name: "earthquake",
          goddess: true,
          winter: {
            quality: +3,
            quantity: 0,
            grow: 100,
            type: "good"
          },
          spring: {
            quality: 0,
            quantity: -1,
            grow: 160,
            type: "bad"
          },
          summer: {
            quality: +3,
            quantity: -2,
            grow: 200,
            type: "bad"
          },
          autumn: {
            quality: 0,
            quantity: -1,
            grow: 260,
            type: "bad"
          }
        }
      ],
      goddessInvocations: [],
      playerInvocations: [],
      currentInvocations: [],
      nouvelleRecompenses: []
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
    selectSemence: (semence) => {
      this.selectedSemence = semence
    },
    addPlayerInvocation: (invocation) => {
      this.playerInvocations.push(invocation)
    },
    addPlayerSemence: (semence) => {
      this.playerSemences.push(semence)
    }
  }
});
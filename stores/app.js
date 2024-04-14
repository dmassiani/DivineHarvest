import { acceptHMRUpdate, defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => {
    return {
      season: "winter",
      tunes: 0,
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
          name: "vent",
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
      currentInvocations: []
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
    }
  }
});
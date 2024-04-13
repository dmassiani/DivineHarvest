import _ from "lodash";
import { acceptHMRUpdate, defineStore } from "pinia";

export const useApp = defineStore("app", {
  state: () => ({}),
  getters: {},
  actions: {},
  persist: {
    // storage: persistedState.localStorage,
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useApp, import.meta.hot));
}

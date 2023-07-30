import { defineStore } from 'pinia'

export const useLoaderStore = defineStore('loader', {
  state: () => ({ isLoading: false}),
  actions: {
    setLoader() {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false;
      }, 4000);
    }
  }
})
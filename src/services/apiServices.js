import { defineStore } from "pinia";
import axios from "axios";

export const useApiService = defineStore("apiService", {
  state: () => ({
    data: [],
  }),
  actions: {
    async get(apiEndpoint) {
      try {
        const response = await axios.get(
          `https://genuine-fish-36d1276c3a.strapiapp.com/api/${apiEndpoint}`,
          {
            headers: {
              "Content-Type": "application/json",
              API_KEY: import.meta.env.VITE_API_KEY,
            },
          }
        );
        this.data = response.data.data;
      } catch (error) {
        console.error(`Error fetching data from ${apiEndpoint}:`, error);
      }
    },
  },
});

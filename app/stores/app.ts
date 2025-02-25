import { defineStore } from 'pinia'

// Define types for our Pokémon item
export const useAppStore = defineStore('app', {
  state: () => ({
    overviewMode: 'list',
    detailPageMode: 'list',
  }),

  actions: {
    toggleOverviewMode() {
      this.overviewMode = this.overviewMode === 'grid' ? 'list' : 'grid'
    },

    toggleDetailPageMode() {
      this.detailPageMode = this.detailPageMode === 'grid' ? 'list' : 'grid'
    },
  },
})

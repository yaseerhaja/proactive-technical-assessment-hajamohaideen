import { defineStore } from 'pinia'

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

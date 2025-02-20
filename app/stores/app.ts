import type { APP_NAME } from '~/utils/constants'
import { defineStore } from 'pinia'

// Define types for our Pokémon item
export const useAppStore = defineStore('app', {
  state: () => ({
    mode: 'grid',
    currentApp: null as APP_NAME | null,
  }),

  actions: {
    setCurrentApp(currentApp: APP_NAME): void {
      this.currentApp = currentApp
    },

    toggleMode() {
      this.mode = this.mode === 'grid' ? 'list' : 'grid'
    },
  },
})

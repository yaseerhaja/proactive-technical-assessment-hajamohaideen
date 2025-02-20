import type { APP_NAME } from '~/utils/constants'
import type { Pokemon } from '~/utils/pokemon'
import type { RickAndMorty } from '~/utils/rickandmorty'
import { defineStore } from 'pinia'

// Define types for our Pokémon item
export const useAppStore = defineStore('app', {
  state: () => ({
    items: null as Pokemon | RickAndMorty,
    currentApp: null as APP_NAME | null,
  }),

  actions: {
    async fetchPokemonData(): Promise<void> {
      const { data } = await usePokemonData('pokemon')

      // Set Store data
      this.items = data
    },

    async fetchRickAndMortyData(): void {
      const { data } = await useRickAndMortyData('character')

      // Set Store data
      this.items = data
    },

    // Get store Items
    getItems(): Pokemon | RickAndMorty {
      return this.items ?? {}
    },

    setCurrentApp(currentApp: APP_NAME): void {
      this.currentApp = currentApp
    },
  },
})

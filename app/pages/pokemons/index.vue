<script setup lang="ts">
import { computed } from 'vue'
import BreadcrumbNav from '~/components/Navigation/BreadcrumbNav.vue'
import ListOrGrid from '~/components/Overview/ListOrGrid.vue'
import { fetchPokemonData } from '~/composables/usePokemon'

const navLinks = [{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/',
}, {
  label: 'Pokemons',
  icon: 'i-heroicons-solid:view-list',
}]

const appStore = useAppStore()

// Fetch pokemon data
const itemsData = await fetchPokemonData()

const viewMode = computed(() => appStore.mode)
const toggleViewMode = () => appStore.toggleMode()

// Simulate item data mapping from the API response
const items = itemsData?.results?.map((pokemon: any) => {
  const id = getPokemonId(pokemon.url)
  return {
    id,
    name: pokemon.name,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
  }
}) || []


const buttonText = computed(() => (viewMode.value === 'list' ? 'Show List View' : 'Show Grid View'))
const containerClass = computed(() => (viewMode.value !== 'list' ? 'space-y-4' : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'))

function getPokemonId(url: string): number {
  const match = url.match(/\/pokemon\/(\d+)\//)
  return match ? Number.parseInt(match[1], 10) : 0
}
</script>

<template>
  <div class="w-full px-4 mt-6 md:px-8 mx-auto sm:px-6 lg:px-8 max-w-7xl">
    <BreadcrumbNav :links="navLinks" />
    <!-- Toggle Button -->
    <div class="flex justify-end mb-4">
      <UButton color="primary" variant="outline" @click="toggleViewMode">
        {{ buttonText }}
      </UButton>
    </div>

    <!-- List/Grid View -->
    <ListOrGrid
      :items="items"
      :containerClass="containerClass"
      to="/pokemons"
      :isGrid="viewMode.value === 'grid'"
    />
  </div>
</template>

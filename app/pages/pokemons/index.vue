<script setup lang="ts">
import { computed } from 'vue'
import ListOrGrid from '~/components/Application/Overview/ListOrGrid.vue'
import BreadcrumbNav from '~/components/Navigation/BreadcrumbNav.vue'
import { fetchPokemonData } from '~/composables/usePokemon'
import { useAppStore } from '~/stores/app'

const navLinks = [
  { label: 'Home', icon: 'i-heroicons-home', to: '/' },
  { label: 'Pokemons', icon: 'i-heroicons-solid:view-list' },
]

const appStore = useAppStore()
const viewMode = computed(() => appStore.mode)
const toggleViewMode = () => appStore.toggleMode()
const buttonText = computed(() => (viewMode.value === 'list' ? 'Show List View' : 'Show Grid View'))

// ✅ Fetch data server-side using useAsyncData()
const { data: itemsData } = await useAsyncData('pokemon-list', fetchPokemonData)

const items = computed(() =>
  itemsData.value?.results?.map((pokemon: any) => ({
    id: getPokemonId(pokemon.url),
    name: pokemon.name,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getPokemonId(pokemon.url)}.png`,
  })) || [],
)

const containerClass = computed(() =>
  viewMode.value !== 'list' ? 'space-y-4' : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4',
)

function getPokemonId(url: string): number {
  const match = url.match(/\/pokemon\/(\d+)\//)
  return match ? Number.parseInt(match[1], 10) : 0
}
</script>

<template>
  <div class="w-full px-4 mt-6 md:px-8 mx-auto sm:px-6 lg:px-8 max-w-7xl">
    <BreadcrumbNav :links="navLinks" />
    <!-- Toggle Button -->
    <u-container class="hidden sm:block">
      <div class="flex justify-end mb-4">
        <UButton color="primary" variant="outline" @click="toggleViewMode">
          {{ buttonText }}
        </UButton>
      </div>
    </u-container>

    <!-- List/Grid View -->
    <ListOrGrid
      :items="items"
      :container-class="containerClass"
      to="/pokemons"
      :is-grid="viewMode.value === 'grid'"
    />
  </div>
</template>

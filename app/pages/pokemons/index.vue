<script setup lang="ts">
import { Grid, List } from 'lucide-vue-next'
import { computed, ref } from 'vue'
import BreadcrumbNav from '~/components/Navigation/BreadcrumbNav.vue'
import { useAppStore } from '~/stores/app'

const isGrid = ref(false)

const appStore = useAppStore()

const navLinks = [{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/',
}, {
  label: 'Pokemons',
  icon: 'i-heroicons-solid:view-list',
}]

// Fetch pokemon data
await appStore.fetchPokemonData()

const itemsData = computed(() => appStore.getItems())

// Simulate item data mapping from the API response
const items = computed(() => {
  return itemsData.value?.results?.map((pokemon: any) => {
    const id = getPokemonId(pokemon.url)
    return {
      id,
      name: pokemon.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
    }
  }) || []
})

const buttonIcon = computed(() => (isGrid.value ? List : Grid))
const buttonText = computed(() => (isGrid.value ? 'List View' : 'Grid View'))

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
      <UButton color="primary" variant="outline" @click="isGrid = !isGrid">
        <component :is="buttonIcon" class="w-5 h-5 mr-2" />
        {{ buttonText }}
      </UButton>
    </div>

    <!-- List/Grid View -->
    <div v-if="items.length">
      <div :class="isGrid ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4' : 'space-y-4'">
        <UCard
          v-for="item in items"
          :key="item.id"
          class="p-4 w-full"
        >
          <div class="flex flex-col justify-between items-center md:space-x-4 md:flex-row" :class="{ 'flex-col text-center': isGrid }">
            <div>
              <img :src="item.image" :alt="item.name" class="w-48 h-48 md:w-32 md:h-32 rounded-lg">
              <span class="mt-2 text-lg font-medium">{{ item.name }}</span>
            </div>
            <div>
              <NuxtLink :to="`/pokemons/${item.id}`">
                <UButton color="primary" variant="outline" class="w-full p-2 cursor-pointer">
                  More Details
                </UButton>
              </NuxtLink>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BreadcrumbNav from '~/components/Navigation/BreadcrumbNav.vue'

import ListOrGrid from '~/components/Application/Overview/ListOrGrid.vue'
import { fetchRickAndMortyData } from '~/composables/useRickAndMorty'

const navLinks = [{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/',
}, {
  label: 'Rick and Morty',
  icon: 'i-heroicons-solid:view-list',
}]

const appStore = useAppStore()

const viewMode = computed(() => appStore.mode)
const toggleViewMode = () => appStore.toggleMode()

// Fetch pokemon data
const itemsData = await fetchRickAndMortyData()

// Simulate item data mapping from the API response
const items = itemsData?.results?.map((character: any) => {
  return {
    id: character.id,
    name: character.name,
    image: character.image,
  }
}) || []

const buttonText = computed(() => (viewMode.value === 'list' ? 'Show List View' : 'Show Grid View'))
const containerClass = computed(() => (viewMode.value !== 'list' ? 'space-y-4' : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'))
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
      to="/rick-and-morty"
      :isGrid="viewMode.value === 'grid'"
    />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import BreadcrumbNav from '~/components/Navigation/BreadcrumbNav.vue'
import { fetchRickAndMortyDetailById } from '~/composables/useRickAndMorty'

const route = useRoute()

const navLinks = [{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/',
}, {
  label: 'Rick and Morty',
  icon: 'i-heroicons-solid:view-list',
  to: '/rick-and-morty',
}, {
  label: 'Character',
  icon: 'i-heroicons:user-group-16-solid',
}]

// Fetch item data during SSR (this ensures the data is available on hard refresh)
const itemData = await fetchRickAndMortyDetailById(route.params.id)
</script>

<template>
  <div class="w-full px-4 mt-6 md:px-8 mx-auto sm:px-6 lg:px-8 max-w-7xl">
    <BreadcrumbNav :links="navLinks" />
    <div v-if="itemData?.id" class="w-full max-w-4xl mt-8 h-auto">
      <UCard class="p-6 h-auto">
        <div class="flex flex-col md:flex-row items-center h-auto">
          <div class="m-4 h-[275px] md:h-[375px]">
            <img :src="itemData.image" :alt="itemData.name" class="h-[275px] md:h-[375px] w-auto rounded-lg object-cover mb-4">
          </div>
          <div class="m-4">
            <h2 class="text-2xl font-bold">
              {{ itemData.name }}
            </h2>
            <p class="text-gray-600 mt-2">
              {{ itemData.species }}
            </p>
          </div>
        </div>
      </UCard>
    </div>
    <div v-else class="text-center mt-10">
      Loading...
    </div>
  </div>
</template>

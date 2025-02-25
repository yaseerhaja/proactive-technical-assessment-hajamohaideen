<script setup lang="ts">
import { useRoute } from 'vue-router'
import DetailCard from '~/components/Application/DetailPage/DetailCard.vue'
import BreadcrumbNav from '~/components/Navigation/BreadcrumbNav.vue'
import { fetchRickAndMortyDetailById } from '~/composables/useRickAndMorty'

const route = useRoute()

const navLinks = [
  { label: 'Home', icon: 'i-heroicons-home', to: '/' },
  { label: 'Rick and Morty', icon: 'i-heroicons-solid:view-list', to: '/rick-and-morty' },
  { label: 'Character', icon: 'i-heroicons:user-group-16-solid' },
]

// ✅ Fetch data with SSR support
const { data: itemData } = await useAsyncData(
  `rick-morty-${route.params.id}`,
  () => fetchRickAndMortyDetailById(route.params.id),
)

// ✅ Computed properties for safe rendering
const basicDetail = computed(() => [
  { Name: itemData.value?.name || 'N/A' },
  { Status: itemData.value?.status || 'N/A' },
  { Species: itemData.value?.species || 'N/A' },
  { Type: itemData.value?.type || 'N/A' },
  { Gender: itemData.value?.gender || 'N/A' },
])

const episodeDetail = computed(() =>
  itemData.value?.episode?.map((e: string, index: number) => ({
    Name: `Episode ${index + 1}`,
    Link: e,
  })) || [],
)
</script>

<template>
  <div class="w-full px-4 mt-6 md:px-8 mx-auto sm:px-6 lg:px-8 max-w-7xl">
    <BreadcrumbNav :links="navLinks" />
    <div v-if="itemData?.id" class="w-full mt-8 h-auto">
      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        <div class="md:col-span-2 lg:col-span-1 lg:row-span-1">
          <UCard class="p-6 flex justify-center items-center h-full">
            <div class="flex flex-col items-center h-auto">
              <div class="m-4">
                <img
                  :src="itemData.image"
                  :alt="itemData.name"
                  class="h-[275px] md:h-[375px] w-auto rounded-lg object-cover mb-4"
                  loading="lazy"
                >
              </div>
              <div class="m-4">
                <h2 class="text-2xl font-bold">
                  {{ itemData.name }}
                </h2>
              </div>
            </div>
          </UCard>
        </div>
        <div class="col-span-1">
          <DetailCard :details="basicDetail" title="Basic Details" />
        </div>
        <div class="col-span-1">
          <DetailCard :details="episodeDetail" title="Episode" />
        </div>
      </div>
    </div>
    <div v-else class="text-center mt-10">
      Loading...
    </div>
  </div>
</template>

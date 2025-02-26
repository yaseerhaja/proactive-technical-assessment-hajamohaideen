<script setup lang="ts">
import type { Ability, GameIndex, Stat, Type } from '~/utils/pokemon'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import DetailCard from '~/components/Application/DetailPage/DetailCard.vue'
import BreadcrumbNav from '~/components/Navigation/BreadcrumbNav.vue'
import { fetchPokemonDetailById } from '~/composables/usePokemon'
import { useAppStore } from '~/stores/app'

const route = useRoute()

const appStore = useAppStore()
const viewMode = computed(() => appStore.detailPageMode)
const toggleViewMode = () => appStore.toggleDetailPageMode()
const buttonText = computed(() => (viewMode.value === 'list' ? 'Show List View' : 'Show Grid View'))

const containerClass = computed(() => (viewMode.value !== 'list' ? 'grid gap-4' : 'grid gap-4 md:grid-cols-2 lg:grid-cols-3'))

const navLinks = [
  { label: 'Home', icon: 'i-heroicons-home', to: '/' },
  { label: 'Pokemons', icon: 'i-heroicons-solid:view-list', to: '/pokemons' },
  { label: 'Character', icon: 'i-heroicons:user-group-16-solid' },
]

const { data: itemData } = useAsyncData(() => fetchPokemonDetailById(route.params.id))

const basicDetail = computed(() => [
  { Name: itemData.value?.name || 'N/A' },
  { Height: itemData.value?.height || 'N/A' },
  { Order: itemData.value?.order || 'N/A' },
  { Weight: itemData.value?.weight || 'N/A' },
  { 'Base Experience': itemData.value?.base_experience || 'N/A' },
])

const abilityDetail = computed(() =>
  itemData.value?.abilities?.map((ability: Ability) => ({
    Name: ability.ability.name,
    Link: ability.ability.url,
    Slot: ability.slot,
    Hidden: ability.is_hidden,
  })) || [],
)

const species = computed(() => [
  { Name: itemData.value?.species?.name, Link: itemData.value?.species?.url },
])

const types = computed(() =>
  itemData.value?.types?.map((e: Type) => ({
    Name: e.type.name,
    Link: e.type.url,
    Slot: e.slot,
  })) || [],
)

const stats = computed(() =>
  itemData.value?.stats?.map((e: Stat) => ({
    'Name': e.stat.name,
    'Link': e.stat.url,
    'Effort': e.effort,
    'Base Stats': e.base_stat,
  })) || [],
)

const game_indices = computed(() =>
  itemData.value?.game_indices?.map((e: GameIndex) => ({
    'Version Name': e.version.name,
    'Link': e.version.url,
    'Game Index': e.game_index,
  })) || [],
)
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

    <div v-if="itemData" class="w-full mt-8 h-auto mb-4">
      <div :class="containerClass">
        <div class="md:col-span-2 lg:col-span-1 lg:row-span-2">
          <UCard class="p-6 flex justify-center items-center h-full">
            <div class="flex flex-col items-center h-auto">
              <div class="m-4">
                <img
                  :src="itemData.sprites?.other?.['official-artwork']?.front_default"
                  :alt="itemData.name"
                  class="w-auto rounded-lg object-cover mb-4"
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
          <DetailCard :details="abilityDetail" title="Ability" />
        </div>
        <div class="col-span-1">
          <DetailCard :details="species" title="Species" />
        </div>
        <div class="col-span-1">
          <DetailCard :details="types" title="Types" />
        </div>
        <div class="col-span-1">
          <DetailCard :details="stats" title="Stats" />
        </div>
        <div class="col-span-1">
          <DetailCard :details="game_indices" title="Game Indices" />
        </div>
      </div>
    </div>
    <div v-else class="text-center mt-10">
      Loading...
    </div>
  </div>
</template>

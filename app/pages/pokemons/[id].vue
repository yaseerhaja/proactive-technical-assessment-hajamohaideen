<script setup lang="ts">
import type { Ability, GameIndex, Stat, Type } from '~/utils/pokemon'
import { useRoute } from 'vue-router'
import DetailCard from '~/components/Application/DetailPage/DetailCard.vue'
import BreadcrumbNav from '~/components/Navigation/BreadcrumbNav.vue'
import { fetchPokemonDetailById } from '~/composables/usePokemon'

const route = useRoute()

const navLinks = [{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/',
}, {
  label: 'Pokemons',
  icon: 'i-heroicons-solid:view-list',
  to: '/pokemons',
}, {
  label: 'Character',
  icon: 'i-heroicons:user-group-16-solid',
}]

// Fetch item data during SSR (this ensures the data is available on hard refresh)
const itemData = await fetchPokemonDetailById(route.params.id)

const basicDetail = [{
  'Name': itemData?.name || 'N/A',
  'Height': itemData?.height || 'N/A',
  'Order': itemData?.order || 'N/A',
  'Weight': itemData?.weight || 'N/A',
  'Base Experience': itemData?.base_experience || 'N/A',
}]

const abilityDetail = itemData?.abilities.map((ability: Ability) => {
  return {
    Name: ability.ability.name,
    Link: ability.ability.url,
    Slot: ability.slot,
    Hidden: ability.is_hidden,
  }
}) || []

const species = [
  {
    Name: itemData?.species.name,
    Link: itemData?.species.url,
  },
]

const types = itemData?.types.map((e: Type) => {
  return {
    Name: e.type.name,
    Link: e.type.url,
    Slot: e.slot,
  }
})

const stats = itemData?.stats.map((e: Stat) => {
  return {
    'Name': e.stat.name,
    'Link': e.stat.url,
    'Effort': e.effort,
    'Base Stats': e.base_stat,
  }
})

const game_indices = itemData?.game_indices.map((e: GameIndex) => {
  return {
    'Version Name': e.version.name,
    'Link': e.version.url,
    'Game Index': e.game_index,
  }
})
</script>

<template>
  <div class="w-full px-4 mt-6 md:px-8 mx-auto sm:px-6 lg:px-8 max-w-7xl">
    <BreadcrumbNav :links="navLinks" />
    <div v-if="itemData?.id" class="w-full mt-8 h-auto">
      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div class="md:col-span-2 lg:col-span-1 lg:row-span-2">
          <UCard class="p-6 flex justify-center items-center h-full">
            <div class="flex flex-col items-center h-auto">
              <div class="m-4">
                <img :src="itemData.sprites?.other?.['official-artwork']?.front_default" :alt="itemData.name" class="w-auto rounded-lg object-cover mb-4" loading="lazy">
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
          <DetailCard :details="game_indices" title="Game indices" />
        </div>
      </div>
    </div>
    <div v-else class="text-center mt-10">
      Loading...
    </div>
  </div>
</template>

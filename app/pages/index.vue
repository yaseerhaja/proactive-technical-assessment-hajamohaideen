<script setup lang="ts">
import OverviewCard from '~/components/Layout/OverviewCard.vue'
import { useAppStore } from '~/stores/app'
import { APP_NAME } from '~/utils/constants'

const appStore = useAppStore()

function handleClickEvent(currentApp: APP_NAME) {
  appStore.setCurrentApp(currentApp)
}
</script>

<template>
  <div class="py-8">
    <UContainer>
      <header class="border-b mb-8 py-2 text-xl">
        <h1>
          Rick & Morty and Pokémon Overview
        </h1>
      </header>
      <div class="grid gap-4 xl:grid-cols-2">
        <PageSection title="Rick and Morty">
          <OverviewCard
            id="rick-and-morty"
            image-src="/images/Rick_and_Morty.webp"
            image-alt="Rick and Morty"
            to="/rick-and-morty"
            @click="handleClickEvent(APP_NAME.RICK_AND_MORTY)"
          />
        </PageSection>
        <PageSection title="Pokemon">
          <OverviewCard
            id="pokemon"
            image-src="/images/Pokemon.webp"
            image-alt="Pokemon"
            to="/pokemons"
            @click="handleClickEvent(APP_NAME.POKEMON)"
          />
        </PageSection>
      </div>
    </UContainer>
  </div>
</template>

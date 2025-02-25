<script setup lang="ts">
import OverviewCard from '~/components/Layout/OverviewCard.vue'
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
          />
        </PageSection>
        <PageSection title="Pokemon">
          <OverviewCard
            id="pokemon"
            image-src="/images/Pokemon.webp"
            image-alt="Pokemon"
            to="/pokemons"
          />
        </PageSection>
      </div>
    </UContainer>
  </div>
</template>

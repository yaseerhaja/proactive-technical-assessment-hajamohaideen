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
          <OverviewCard imageSrc="/images/Rick_and_Morty.webp" imageAlt="Rick and Morty" />
        </PageSection>
        <PageSection title="Pokemon">
          <OverviewCard imageSrc="/images/Pokemon.webp" imageAlt="Pokemon" />
        </PageSection>
      </div>
    </UContainer>
  </div>
</template>

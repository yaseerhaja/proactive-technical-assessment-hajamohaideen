<script setup lang="ts">
import type { OverviewItem } from '~/utils/constants'

const props = defineProps<{
  items: OverviewItem[]
  to: string
  containerClass: string
  isGrid: boolean
}>()
</script>

<template>
  <div v-if="props.items.length">
    <div :class="containerClass">
      <UCard
        v-for="item in items"
        :key="item.id"
        class="p-4 w-full"
      >
        <div class="flex flex-col justify-between items-center md:space-x-4 md:flex-row" :class="{ 'flex-col text-center': props.isGrid }">
          <div>
            <img :src="item.image" :alt="item.name" class="w-48 h-48 md:w-32 md:h-32 rounded-lg" loading="lazy">
            <span class="mt-2 text-lg font-medium">{{ item.name }}</span>
          </div>
          <div>
            <NuxtLink :to="`${props.to}/${item.id}`">
              <UButton color="primary" variant="outline" class="w-full p-2 cursor-pointer">
                More Details
              </UButton>
            </NuxtLink>
          </div>
        </div>
      </UCard>
    </div>
  </div>
</template>

<style scoped>

</style>

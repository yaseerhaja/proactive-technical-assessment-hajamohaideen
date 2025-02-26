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
  <div v-if="props.items.length" class="list-grid-container">
    <div :class="containerClass">
      <UCard
        v-for="item in props.items"
        :key="item.id"
        class="p-4 w-full"
      >
        <div class="flex flex-col justify-between items-center md:space-x-4 md:flex-row" :class="{ 'flex-col text-center': props.isGrid }">
          <div class="md:flex flex-col items-center">
            <img :src="item.image" :alt="item.name" class="w-48 h-48 md:w-32 md:h-32 rounded-lg" loading="lazy">
            <span class="mt-2 ml-2 text-lg font-medium">{{ item.name }}</span>
          </div>
          <div>
            <NuxtLink
              :to="`${props.to}/${item.id}`"
              class="w-full cursor-pointer"
              aria-label="More details"
            >
              <UButton
                color="primary"
                variant="outline"
                class="w-full p-2"
              >
                More Details
              </UButton>
            </NuxtLink>
          </div>
        </div>
      </UCard>
    </div>
  </div>
</template>

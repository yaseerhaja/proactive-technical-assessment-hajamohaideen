<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  id: string
  imageSrc: string
  imageAlt: string
  to: string
}>()

const imageLoaded = ref(false)
</script>

<template>
  <NuxtLink :to="props.to">
    <UCard class="overview-card relative">
      <div class="h-42 flex items-center justify-center relative overflow-hidden">
        <NuxtImg
          v-if="props.imageSrc"
          :src="props.imageSrc"
          :alt="props.imageAlt"
          class="overview-image object-cover rounded-md transition-opacity duration-500"
          :class="{ 'opacity-0': !imageLoaded, 'opacity-100': imageLoaded }"
          @load="imageLoaded = true"
        />
      </div>
    </UCard>
  </NuxtLink>
</template>

<style scoped>
.opacity-0 {
  opacity: 0;
}
.opacity-100 {
  opacity: 1;
}
.overview-card:hover {
  cursor: pointer;
}
</style>

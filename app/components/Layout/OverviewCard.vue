<script setup>
const props = defineProps({
  imageSrc: {
    type: String,
    default: '',
  },
  imageAlt: {
    type: String,
  },
})
const imageLoaded = ref(false)
</script>

<template>
  <UCard class="relative">
    <div class="h-42 flex items-center justify-center relative overflow-hidden">
      <NuxtImg
        v-if="props.imageSrc"
        :src="props.imageSrc"
        :alt="props.imageAlt"
        class="object-cover rounded-md transition-opacity duration-500"
        :class="{ 'opacity-0': !imageLoaded, 'opacity-100': imageLoaded }"
        @load="imageLoaded = true"
      />
    </div>
  </UCard>
</template>

<style scoped>
.opacity-0 {
  opacity: 0;
}
.opacity-100 {
  opacity: 1;
}
</style>

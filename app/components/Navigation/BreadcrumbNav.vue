<script setup lang="ts">
export interface Link {
  label: string
  icon: string
  to?: string
}

const props = defineProps<{
  links: Link[]
}>()
</script>

<template>
  <UBreadcrumb :links="props.links" class="h-10 m-4" />
</template>

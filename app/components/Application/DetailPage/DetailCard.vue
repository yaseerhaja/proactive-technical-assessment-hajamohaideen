<script setup lang="ts">
type GenericMap<T> = {
  [K in string]: T;
}

const props = defineProps<{
  details: GenericMap[]
  title: string
}>()
</script>

<template>
  <UCard class="h-full">
    <template #header>
      <div class="flex flex-row justify-between">
        <h3 class="text-xl font-bold">
          {{ props.title }}
        </h3>
        <UBadge v-if="details.length > 1" :label="details.length" />
      </div>
    </template>
    <u-container v-if="props.details.length" class="m-0">
      <u-container v-for="(detail, index) in props.details" :key="index">
        <UDivider v-if="index" class="m-4" />
        <div v-for="(value, key) in detail" :key="key" class="p-0">
          <div v-if="key === 'Link'" class="flex flex-row justify-between h-auto" />
          <div v-else class="flex flex-row justify-between h-auto">
            <div>
              <span class="text-l">
                {{ key }} :
              </span>
            </div>
            <div>
              <span class="text-l ml-2">
                {{ value }}
              </span>
            </div>
          </div>
        </div>
      </u-container>
    </u-container>
  </UCard>
</template>

<style scoped>

</style>

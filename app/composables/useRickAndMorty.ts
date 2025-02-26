import type { Character, RickAndMorty } from '~/utils/rickandmorty'

export async function fetchRickAndMortyData(): RickAndMorty | null {
  const { data, error } = await useRickAndMortyData('character')

  watchEffect(() => {
    if (error.value)
      console.error(error.value.data)
  })
  return data.value as RickAndMorty
}

export async function fetchRickAndMortyDetailById(id: number): Character | null {
  const { data, error } = await useRickAndMortyData('character/{id}', {
    path: () => ({
      id,
    }),
  })

  watchEffect(() => {
    if (error.value)
      console.error(error.value.data)
  })

  return data.value as Character
}

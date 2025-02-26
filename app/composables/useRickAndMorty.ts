import type { Character, RickAndMorty } from '~/utils/rickandmorty'

export async function fetchRickAndMortyData(): Promise<RickAndMorty | null> {
  const { data, error } = await useRickAndMortyData('character')

  if (error.value) {
    console.error(error.value.data)
    return null
  }
  return data.value as RickAndMorty | null
}

export async function fetchRickAndMortyDetailById(id: number): Promise<Character | null> {
  const { data, error } = await useRickAndMortyData('character/{id}', {
    path: () => ({
      id,
    }),
  })

  if (error.value) {
    console.error(error.value.data)
    return null
  }

  return data.value as Character | null
}

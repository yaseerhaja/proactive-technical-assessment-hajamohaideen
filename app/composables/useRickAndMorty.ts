import type { Character, RickAndMorty } from '~/utils/rickandmorty'

export async function fetchRickAndMortyData(): RickAndMorty | null {
  try {
    const { data } = await useRickAndMortyData('character')
    return data.value as RickAndMorty
  }
  catch (error) {
    console.error('Error fetching Rick and Morty data:', error)
    return null
  }
}

export async function fetchRickAndMortyDetailById(id: number): Character | null {
  try {
    const { data } = await useRickAndMortyData(`character/${id}`)

    return data.value as Character
  }
  catch (error) {
    console.error(`Error fetching character Detail data for ID: ${id}`, error)
    return null
  }
}

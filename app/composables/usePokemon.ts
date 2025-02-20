import type { Pokemon, PokemonDetails } from '~/utils/pokemon'

export async function fetchPokemonData(): Pokemon | null {
  try {
    const { data } = await usePokemonData('pokemon')
    return data.value as Pokemon
  }
  catch (error) {
    console.error('Error fetching Pokemon data:', error)
    return null
  }
}

export async function fetchPokemonDetailById(id: number): PokemonDetails | null {
  try {
    const { data } = await usePokemonData(`pokemon/${id}`)

    return data.value as PokemonDetails
  }
  catch (error) {
    console.error(`Error fetching Pokemon Detail data for ID: ${id}`, error)
    return null
  }
}

import type { Pokemon, PokemonDetails } from '~/utils/pokemon'

export async function fetchPokemonData(): Promise<Pokemon | null> {
  const { data, error } = await usePokemonData('pokemon')

  if (error.value) {
    console.error(error.value.data)
    return null
  }

  return data.value as Pokemon | null
}

export async function fetchPokemonDetailById(id: number): Promise<PokemonDetails | null> {
  const { data, error } = await usePokemonData('pokemon/{id}', {
    path: () => ({
      id,
    }),
  })

  if (error.value) {
    console.error(error.value.data)
    return null
  }

  return data.value as PokemonDetails | null
}

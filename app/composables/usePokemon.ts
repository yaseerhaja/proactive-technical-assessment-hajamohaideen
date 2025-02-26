import type { Pokemon, PokemonDetails } from '~/utils/pokemon'

export async function fetchPokemonData(): Pokemon | null {
  const { data, error } = await usePokemonData('pokemon')

  watchEffect(() => {
    if (error.value)
      console.error(error.value.data)
  })

  return data.value as Pokemon
}

export async function fetchPokemonDetailById(id: number): PokemonDetails | null {
  const { data, error } = await usePokemonData('pokemon/{id}', {
    path: () => ({
      id,
    }),
  })

  watchEffect(() => {
    if (error.value)
      console.error(error.value.data)
  })

  return data.value as PokemonDetails
}

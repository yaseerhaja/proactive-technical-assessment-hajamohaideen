export interface Ability {
  ability: {
    name: string
    url: string
  }
  is_hidden: boolean
  slot: number
}

export interface Form {
  name: string
  url: string
}

export interface Version {
  name: string
  url: string
}

export interface GameIndex {
  game_index: number
  version: Version
}

export interface MoveLearnMethod {
  name: string
  url: string
}

export interface VersionGroup {
  name: string
  url: string
}

export interface VersionGroupDetail {
  level_learned_at: number
  version_group: VersionGroup
  move_learn_method: MoveLearnMethod
}

export interface Move {
  move: {
    name: string
    url: string
  }
  version_group_details: VersionGroupDetail[]
}

export interface Species {
  name: string
  url: string
}

export interface Sprites {
  back_default: string
  back_female: string | null
  back_shiny: string
  back_shiny_female: string | null
  front_default: string
  front_female: string | null
  front_shiny: string
  front_shiny_female: string | null
  other: SpriteOther
}

export interface SpriteOther {
  'official-artwork': SpriteOtherArtwork
}

export interface SpriteOtherArtwork {
  front_default: string
  front_shiny: string
}

export interface Stat {
  base_stat: number
  effort: number
  stat: {
    name: string
    url: string
  }
}

export interface Type {
  slot: number
  type: {
    name: string
    url: string
  }
}

export interface PokemonDetails {
  abilities: Ability[]
  base_experience: number
  forms: Form[]
  game_indices: GameIndex[]
  height: number
  held_items: any[]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: Move[]
  name: string
  order: number
  species: Species
  sprites: Sprites
  stats: Stat[]
  types: Type[]
  weight: number
}

export interface AllPokemon {
  name: string
  url: string
}

export interface Pokemon {
  count: number
  next: string
  previous?: string
  results: AllPokemon[]
}

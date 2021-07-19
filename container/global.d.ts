export type EpisodeTypes = {
    id: number
    name: string
    air_date: string
    episode: string
    characters: string[]
}

export type LocationTypes = {
    type: string
    dimension: string
    residents: string[]
    id: number
    name: string
}

export type CharacterTypes = {
    id: number
    name: string
    image: string
    origin: { name: string }
    gender: string
    species: string
    status: string
}

export type EpisodeFethAxiosType = {
    results: EpisodeTypes[]
    info: { next: string | null }
}

export type LocationFethAxiosType = {
    results: LocationTypes[]
    info: { next: string | null }
}

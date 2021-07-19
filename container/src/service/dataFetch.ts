import axios from 'axios'
import { CharacterTypes, EpisodeFethAxiosType, LocationFethAxiosType } from 'global'

const baseUrl = 'https://rickandmortyapi.com/api'

export const EpisodesGET = async (page: number) => {
    const { data } = await axios.get<EpisodeFethAxiosType>(`${baseUrl}/episode?page=${page}`)
    return data
}

export const LocationsGET = async (page: number) => {
    const { data } = await axios.get<LocationFethAxiosType>(`${baseUrl}/location?page=${page}`)
    return data
}

export const CharactersGET = async (characterInfo: string) => {
    const { data } = await axios.get<CharacterTypes>(characterInfo)
    return data
}

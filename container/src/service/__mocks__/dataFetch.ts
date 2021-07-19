import { characterMockResponse } from 'src/fixtures/characters'
import { episodesMockResponse } from 'src/fixtures/episodes'
import { locationsMockResponse } from 'src/fixtures/locations'

export const EpisodesGET = async (page: number) => {
    return new Promise(resolve => resolve(episodesMockResponse))
}

export const LocationsGET = async (page: number) => {
    return new Promise(resolve => resolve(locationsMockResponse))
}

export const CharactersGET = async (characterInfo: string) => {
    return new Promise(resolve => resolve(characterMockResponse))
}

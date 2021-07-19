import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { characterMockResponse } from 'src/fixtures/characters'
import { episodesMockResponse } from 'src/fixtures/episodes'
import { locationsMockResponse } from 'src/fixtures/locations'
import { CharactersGET, EpisodesGET, LocationsGET } from 'src/service/dataFetch'

const mock = new MockAdapter(axios)

describe('Service tests', () => {
    test('epsiodes endpoints', async () => {
        const episodesPageNumber = 1
        const url = `/episode?page=${episodesPageNumber}`

        mock.onGet(url).reply(200, episodesMockResponse)
        const response = await EpisodesGET(episodesPageNumber)

        expect(response).toEqual(episodesMockResponse)
    })
    test('locations endpoints', async () => {
        const locationsPageNumber = 1
        const url = `/location?page=${locationsPageNumber}`

        mock.onGet(url).reply(200, locationsMockResponse)
        const response = await LocationsGET(locationsPageNumber)

        expect(response).toEqual(locationsMockResponse)
    })
    test('characters endpoints', async () => {
        const url = ` https://rickandmortyapi.com/api/character/1`

        mock.onGet(url).reply(200, characterMockResponse)
        const response = await CharactersGET(url)

        expect(response).toEqual(characterMockResponse)
    })
})

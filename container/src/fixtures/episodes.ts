export const episodesMockResponse = {
    info: {
        count: 1,
        pages: 1,
        next: 'https://rickandmortyapi.com/api/episode?page=2',
        prev: null,
    },
    results: [
        {
            id: 90,
            name: 'Pilot',
            air_date: 'December 2, 2013',
            episode: 'S01E01',
            characters: ['https://rickandmortyapi.com/api/character/1'],
            url: 'https://rickandmortyapi.com/api/episode/1',
            created: '2017-11-10T12:56:33.798Z',
        },
    ],
}

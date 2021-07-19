/* eslint-disable react-hooks/exhaustive-deps */
//@ts-ignore
import CharacterCard from 'app1/CharacterCard'
import { CharacterTypes, EpisodeTypes } from 'global'
import { useEffect, useState } from 'react'
import { CharactersGET } from '../service/dataFetch'
import { Button, Center, MainHeading, Text } from '../styles/styles'

type EpisodeBoxTypes = {
    episode: EpisodeTypes
    viewRef?: (node?: Element | null | undefined) => void
}

const EpisodeBox = ({ episode, viewRef }: EpisodeBoxTypes) => {
    const [characters, setCharacters] = useState<CharacterTypes[]>([])
    const [totalCharacters, setTotalCharacters] = useState(6)
    const getCharacters = async () => {
        const charactersInitial: CharacterTypes[] = []
        let characterCount = characters?.length
        characterCount =
            characterCount + 6 > episode.characters.length
                ? episode.characters.length
                : characterCount + 6
        for (let i = 0; i < characterCount; i++) {
            charactersInitial.push(await CharactersGET(episode.characters[i]))
        }
        setCharacters(charactersInitial)
        setTotalCharacters(characterCount)
    }

    useEffect(() => {
        getCharacters()
    }, [])

    return (
        <Center
            data-testid='episode-wrapper'
            as='section'
            ref={viewRef}
            border='1px solid #5252FF'
            borderRadius='6px'
            padding='1em'
            margin='0 0 2em 0'
        >
            <MainHeading textAlign='start'>{`#${episode.id}-${episode.name}`}</MainHeading>

            <Text>
                {`This is the ${episode.episode.split('S')[1].split('E')[0]}st episode in ${
                    episode.episode.split('S')[1].split('E')[1]
                }st session. It was aired on ${episode.air_date}. There are total of ${
                    episode.characters.length
                } featured characters in this episode`}
            </Text>

            <Center flexDirection='row' alignItems='flex-start'>
                {characters?.map(character => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </Center>
            {episode.characters.length > 6 && (
                <Button
                    data-testid='LoadMoreCharacterButton'
                    display={totalCharacters === episode.characters.length ? 'none' : 'block'}
                    onClick={getCharacters}
                >
                    Load More
                </Button>
            )}
        </Center>
    )
}

export default EpisodeBox

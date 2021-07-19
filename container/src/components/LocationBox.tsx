/* eslint-disable react-hooks/exhaustive-deps */
//@ts-ignore
import CharacterCard from 'app1/CharacterCard'
import { CharacterTypes, LocationTypes } from 'global'
import { useEffect, useState } from 'react'
import { CharactersGET } from '../service/dataFetch'
import { Button, Center, MainHeading, Text } from '../styles/styles'

type LocationBoxTypes = {
    location: LocationTypes
    viewRef?: (node?: Element | null | undefined) => void
}

const LocationBox = ({ location, viewRef }: LocationBoxTypes) => {
    const [characters, setCharacters] = useState<CharacterTypes[]>([])
    const [totalCharacters, setTotalCharacters] = useState(6)

    const getCharacters = async () => {
        const charactersInitial: CharacterTypes[] = []
        let characterCount = characters?.length
        characterCount =
            characterCount + 6 > location.residents.length
                ? location.residents.length
                : characterCount + 6
        for (let i = 0; i < characterCount; i++) {
            charactersInitial.push(await CharactersGET(location.residents[i]))
        }
        setCharacters(charactersInitial)
        setTotalCharacters(characterCount)
    }

    useEffect(() => {
        getCharacters()
    }, [])

    return (
        <Center
            data-testid='location-wrapper'
            as='section'
            ref={viewRef}
            border='1px solid #5252FF'
            borderRadius='6px'
            padding='1em'
            margin='0 0 2em 0'
        >
            <MainHeading textAlign='start'>{`#${location.id}-${location.name}`}</MainHeading>

            <Text>
                {`This is a ${location.type} located in ${location.dimension}. There are total of ${location.residents.length} known residents that are originated from here`}
            </Text>

            <Center flexDirection='row' alignItems='flex-start'>
                {characters?.map(character => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </Center>
            {location.residents.length > 6 && (
                <Button
                    display={totalCharacters >= location.residents.length ? 'none' : 'block'}
                    onClick={getCharacters}
                >
                    Load More
                </Button>
            )}
        </Center>
    )
}

export default LocationBox

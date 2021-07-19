import { CharacterTypes } from 'global'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { Center, Heading, Text } from '../../../container/src/styles/styles'

const CharacterCard = ({ character }: { character: CharacterTypes }) => {
    return (
        <Center
            as='article'
            hover='0px 4px 8px 1px #CDCDFF'
            scale={1.02}
            transition='transform .2s'
            border='1px solid #CDCDFF'
            width='30%'
            margin='0.75em'
            borderRadius='8px'
        >
            <LazyLoadImage
                src={character.image}
                width='100%'
                height='50%'
                alt='episode character'
                effect='blur'
            />
            <Heading color='#1f1f1f' fontStyle='normal' margin='0.5em 0 0 0'>
                {character.name}
            </Heading>
            <Center padding='0 1em' flexWrap='wrap'>
                <Text margin='1em 0'>
                    {`From ${character.origin.name}, identifies as ${character.gender} of ${character.species} race.`}
                </Text>
                <Text margin='0 0 0.5em 0'>{`Current Status: ${character.status}`}</Text>
            </Center>
        </Center>
    )
}

export default CharacterCard

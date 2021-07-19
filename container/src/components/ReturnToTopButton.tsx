import { useState } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { TopButton } from '../styles/styles'

const ReturnToTopButton = () => {
    const [buttonVisibility, setButtonVisibility] = useState('none')

    const ToTheTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    window.onscroll = () => {
        if (window.scrollY > 400) setButtonVisibility('flex')
        else setButtonVisibility('none')
    }

    return (
        <TopButton data-testid='navigate-top-button' display={buttonVisibility} onClick={ToTheTop}>
            <AiOutlineArrowUp />
        </TopButton>
    )
}

export default ReturnToTopButton

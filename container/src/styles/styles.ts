import styled from 'styled-components'

interface ElementProps {
    width?: string
    height?: string
    flexDirection?: 'column' | 'row'
    border?: string
    margin?: string
    padding?: string
    justifyContent?: string
    alignItems?: string
    borderRadius?: string
    fontSize?: string
    fontStyle?: string
    color?: string
    textAlign?: 'start' | 'end' | 'center'
    display?: string
    hover?: string
    scale?: number
    transition?: string
    background?: string
    flexWrap?: string
}

export const Center = styled.div<ElementProps>`
    display: flex;
    text-align: center;
    overflow: hidden;
    flex-wrap: ${({ flexWrap }) => (flexWrap ? flexWrap : 'wrap')};
    width: ${({ width }) => (width ? width : '100%')};
    height: ${({ height }) => (height ? height : '100%')};
    background: ${({ background }) => background};
    flex-direction: ${({ flexDirection }) => (flexDirection ? flexDirection : 'column')};
    border: ${({ border }) => (border ? border : 'none')};
    margin: ${({ margin }) => (margin ? margin : '0 0')};
    padding: ${({ padding }) => (padding ? padding : '0 0')};
    border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '0')};
    justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'center')};
    align-items: ${({ alignItems }) => (alignItems ? alignItems : 'center')};
    transition: transform 0.2s;
    :hover {
        box-shadow: ${({ hover }) => hover};
        transform: ${({ scale }) => `scale(${scale})`};
        transition: ${({ transition }) => transition};
    }
`

export const MainContainer = styled(Center)`
    position: relative;
    background: #eee;
    justify-content: flex-start;
    padding: 4em 0;
    text-align: start;
    overflow: visible;
`

export const Navbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    border-bottom: 2px solid #0000a4;
    margin-bottom: 2em;
    position: sticky;
    top: 0;
    overflow: hidden;
    z-index: 1000;
    background: #eee;
`

export const NavbarRoute = styled.a<ElementProps>`
    color: #0000a4;
    background: ${({ background }) => background};
    text-decoration: none;
    font-size: large;
    margin: 0.5em 1em;
    border: 1px solid #0000a4;
    border-radius: 4px;
    padding: 0.5em;
    transition: all 0.15s ease-in-out;
    :hover {
        border: 1px solid #2a2aff;
        color: #2a2aff;
    }
    :active {
        transform: scale(0.9);
    }
    box-shadow: 3px 3px #0000a4;
`

export const Heading = styled.h2<ElementProps>`
    width: 100%;
    font-style: ${({ fontStyle }) => (fontStyle ? fontStyle : 'italic')};
    color: ${({ color }) => (color ? color : '#0000a4')};
    text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
    font-size: ${({ fontSize }) => fontSize && fontSize};
    margin: ${({ margin }) => (margin ? margin : '0 0')};
`

export const MainHeading = styled.h1<ElementProps>`
    width: 100%;
    font-style: ${({ fontStyle }) => (fontStyle ? fontStyle : 'italic')};
    color: ${({ color }) => (color ? color : '#0000a4')};
    text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
    font-size: ${({ fontSize }) => fontSize && fontSize};
    margin: ${({ margin }) => (margin ? margin : '0 0')};
`

export const Button = styled.button<ElementProps>`
    padding: 0.2em;
    font-size: 1.25em;
    background: #0000a4;
    color: #eee;
    border: none;
    border-radius: 4px;
    margin-top: 1em;
    cursor: pointer;
    display: ${({ display }) => display};
`

export const Text = styled.p<ElementProps>`
    width: 100%;
    text-align: left;
    font-size: ${({ fontSize }) => (fontSize ? fontSize : '1.25em')};
    margin: ${({ margin }) => (margin ? margin : '0 0')};
`

export const TopButton = styled.button<ElementProps>`
    position: fixed;
    left: 1em;
    bottom: 1em;
    width: 1.5em;
    height: 1.5em;
    padding: 0.2em;
    z-index: 2000;
    font-size: 1.25em;
    background: #0000a4;
    color: #eee;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: ${({ display }) => display};
    justify-content: center;
    align-items: center;
`

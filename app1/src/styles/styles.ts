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
    responsiveWidth?: string[]
    responsiveMargin?: string
    responsivePadding?: string
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
    @media only screen and (max-width: 1280px) {
        width: ${({ responsiveWidth }) => responsiveWidth?.[0]};
    }
    @media only screen and (max-width: 1024px) {
        width: ${({ responsiveWidth }) => responsiveWidth?.[1]};
    }
    @media only screen and (max-width: 768px) {
        width: ${({ responsiveWidth }) => responsiveWidth?.[2]};
        margin: ${({ responsiveMargin }) => responsiveMargin};
        padding: ${({ responsivePadding }) => responsivePadding};
    }
`

export const Heading = styled.h2<ElementProps>`
    width: 100%;
    font-style: ${({ fontStyle }) => (fontStyle ? fontStyle : 'italic')};
    color: ${({ color }) => (color ? color : '#0000a4')};
    text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
    font-size: ${({ fontSize }) => fontSize && fontSize};
    margin: ${({ margin }) => (margin ? margin : '0 0')};
`

export const Text = styled.p<ElementProps>`
    width: 100%;
    text-align: left;
    font-size: ${({ fontSize }) => (fontSize ? fontSize : '1.25em')};
    margin: ${({ margin }) => (margin ? margin : '0 0')};
`

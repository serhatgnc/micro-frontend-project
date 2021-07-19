import { act, fireEvent, render, waitFor } from '@testing-library/react'
import { useInView } from 'react-intersection-observer'
import App from 'src/App'

jest.unmock('src/service/dataFetch')

const useInViewMock = useInView as jest.Mock

describe('To the top button tests', () => {
    test('button renders correctly', async () => {
        useInViewMock.mockImplementation(() => [null, true])
        const wrapper = render(<App />)
        await waitFor(() => wrapper)

        expect(wrapper.getByTestId('navigate-top-button')).toBeInTheDocument()
    })
    test('button visibility test on scroll below 400', async () => {
        await act(async () => {
            useInViewMock.mockImplementation(() => [null, true])
            const wrapper = render(<App />)
            await waitFor(() => wrapper)

            fireEvent.scroll(window, { target: { scrollY: 500 } })

            expect(wrapper.getByTestId('navigate-top-button')).toHaveAttribute('display', 'flex')
        })
    })
    test('button takes page to the top', async () => {
        await act(async () => {
            useInViewMock.mockImplementation(() => [null, true])
            const wrapper = render(<App />)
            await waitFor(() => wrapper)
            window.scrollTo = jest.fn()

            fireEvent.scroll(window, { target: { scrollY: 500 } })

            fireEvent.click(wrapper.getByTestId('navigate-top-button'))

            setTimeout(() => {
                expect(window.scrollY).toBe(0)
            }, 100)
        })
    })
})

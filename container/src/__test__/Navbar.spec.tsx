import { render, waitFor } from '@testing-library/react'
import { useInView } from 'react-intersection-observer'
import Navbar from 'src/components/Navbar'

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: jest.fn(),
        location: {},
    }),
}))

jest.unmock('src/service/dataFetch')

const useInViewMock = useInView as jest.Mock

const links = [
    { id: 'navbar-episodes-route', location: '/' },
    { id: 'navbar-locations-route', location: '/locations' },
]

describe('Navbar tests', () => {
    test('Navbar component rendered correctly', async () => {
        const wrapper = render(<Navbar />)
        await waitFor(() => wrapper)

        expect(wrapper).toMatchSnapshot()
        wrapper.unmount()
    })
    test.each(links)('navbar link hrefs are correct', async link => {
        const wrapper = render(<Navbar />)
        await waitFor(() => wrapper)

        expect(wrapper.getByTestId(link.id)).toHaveAttribute('href', link.location)
        wrapper.unmount()
    })
})

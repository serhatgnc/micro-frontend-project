import { render, waitFor } from '@testing-library/react'
import { useInView } from 'react-intersection-observer'
import Locations from 'src/pages/Locations'

const useInViewMock = useInView as jest.Mock

describe('Locations page tests', () => {
    test('generates a snapshot', async () => {
        useInViewMock.mockImplementation(() => [null, true])

        const wrapper = render(<Locations />)
        await waitFor(() => wrapper)

        expect(wrapper).toMatchSnapshot()
        wrapper.unmount()
    })
})

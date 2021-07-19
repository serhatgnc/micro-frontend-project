import { render, waitFor } from '@testing-library/react'
import { useInView } from 'react-intersection-observer'
import Episodes from 'src/pages/Episodes'

const useInViewMock = useInView as jest.Mock

describe('Episode page tests', () => {
    test('generates a snapshot', async () => {
        useInViewMock.mockImplementation(() => [null, true])

        const wrapper = render(<Episodes />)
        await waitFor(() => wrapper)

        expect(wrapper).toMatchSnapshot()
        wrapper.unmount()
    })
})

import FirstPost from './first-post'
import { render } from '@testing-library/react'

describe('first post test suite', () => {
    it('contains a h1 with First Post as title', () => {
        const { queryByText } = render(<FirstPost />)

        expect(queryByText('First Post')).toBeInTheDocument()
    })
})
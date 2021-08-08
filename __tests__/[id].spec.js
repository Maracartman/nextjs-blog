import Post from '../pages/posts/[id].js'
import { render } from '@testing-library/react'

describe('dynamic post page test suite', () => {
    const postData = {
        title: 'Hello!',
        date: '2020-01-02',
        contentHtml: '<div data-testid="content">Hello World!</div>'
    }

    let postRender

    beforeEach(() => {
        postRender = render(<Post postData={postData}/>)
    })

    it('renders the post title', () => {
        expect(postRender.queryByText('Hello!')).toBeInTheDocument()
    })

    it('renders the post date', () => {
        expect(postRender.queryByText('January 2, 2020')).toBeInTheDocument()
    })

    it('renders post content', () => {
        expect(postRender.getByTestId('content')).toBeDefined()
    })
})
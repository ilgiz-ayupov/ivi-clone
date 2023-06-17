import { render } from '@testing-library/react'

import { Logo } from '@/components'

describe('Logo', () => {
    it('should render component', () => {
        const { container } = render(<Logo />)

        expect(container.firstElementChild).toBeInTheDocument()
    })

    it('should accept additional class', () => {
        const { container } = render(<Logo className="test-class" />)

        expect(container.firstElementChild).toHaveClass('test-class')
    })

    it('the link should lead to the home page', () => {
        const { getByRole } = render(<Logo />)

        const link = getByRole('link')
        expect(link).toHaveAttribute('href', '/')
    })

    it('should render logo image', () => {
        const { getByRole } = render(<Logo />)

        const logo = getByRole('img')
        expect(logo).toBeInTheDocument()
    })
})
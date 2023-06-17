import { renderHook, act } from '@testing-library/react'

import { useLanguage } from '@/hooks/useLanguage'

import { LanguageProvider } from '@/context'

describe('useLanguage', () => {
    it('should provided language and setLanguage', () => {
        const { result } = renderHook(() => useLanguage())

        expect(result.current.language).toBe('ru')
        expect(result.current.setLanguage).toBeDefined()
    })

    it('setLanguage should change language', () => {
        const { result } = renderHook(() => useLanguage(), {
            wrapper: ({ children }) => (
                <LanguageProvider>{children}</LanguageProvider>
            ),
        })

        act(() => result.current.setLanguage('en'))
        expect(result.current.language).toBe('en')

        act(() => result.current.setLanguage('ru'))
        expect(result.current.language).toBe('ru')
    })
})

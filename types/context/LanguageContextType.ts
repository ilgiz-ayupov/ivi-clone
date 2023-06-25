import type { LanguageType } from '../LanguageType';

export interface LanguageContextType {
    language: LanguageType;
    setLanguage: (language: LanguageType) => void;
}

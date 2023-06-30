import { useContext } from 'react';

import { TranslatorContext } from '../context';

export const useTranslator = () => useContext(TranslatorContext);

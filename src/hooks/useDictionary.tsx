/**
 * Custom hook and context for managing the dictionary useState change events
 */

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';
import { DictionaryType } from '../types';

type ContextHelperType = DictionaryType | undefined

type ContextType = {
  dictionary: ContextHelperType
  setDictionary: Dispatch<SetStateAction<ContextHelperType>>
}

export const DictionaryContext = createContext<ContextType | undefined>(undefined);

type DictionaryProviderProps = {
  children: ReactNode;
};

/**
 * Provider to fill up the state that will be used after the dictionary api is initialized
 */
export const DictionaryProvider = ({ children }: DictionaryProviderProps): ReactNode => {
  const [dictionary, setDictionary] = useState<DictionaryType>();

  return <DictionaryContext.Provider value={{ dictionary, setDictionary }}>{children}</DictionaryContext.Provider>;
};

/**
 * Hook to use the context with proper error handling
 *
 * @throws {Error} - if used outside a DctionaryContext
 * @returns {dictionary} - The dictionary state from DctionaryProvider
 */
export function useDictionaryContext(): any {
  const context = useContext(DictionaryContext);

  if (!context) {
    throw new Error('useDictionary must be used with a DictionaryContext');
  }

  return context;
}

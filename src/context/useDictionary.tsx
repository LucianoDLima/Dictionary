/**
 * Context for managing the dictionary data spreading across the app
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

export const DictionaryProvider = ({ children }: DictionaryProviderProps): JSX.Element => {
  const [dictionary, setDictionary] = useState<DictionaryType>();

  return <DictionaryContext.Provider value={{ dictionary, setDictionary }}>{children}</DictionaryContext.Provider>;
};

export function useDictionaryContext(): any {
  const context = useContext(DictionaryContext);

  if (!context) {
    throw new Error('useDictionary must be used with a DictionaryContext');
  }

  return context;
}

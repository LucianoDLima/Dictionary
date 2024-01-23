/**
 * Context to store the current searched word
 * This way users can't search for the same word they are already seeing
 */

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';

type CurrentWordType = string | null

type CurrentWordContextType = {
  currentWord: CurrentWordType;
  setCurrentWord: Dispatch<SetStateAction<CurrentWordType>>;
};

const CurrentWordContext = createContext<CurrentWordContextType | undefined>(undefined);

type CurrentWordProviderProps = {
  children: ReactNode;
};

export const CurrentWordProvider = ({ children }: CurrentWordProviderProps): JSX.Element => {
  const [currentWord, setCurrentWord] = useState<CurrentWordType>(null);

  return <CurrentWordContext.Provider value={{ currentWord, setCurrentWord }}>{children}</CurrentWordContext.Provider>;
};

export function useCurrentWordContext(): CurrentWordContextType {
  const context = useContext(CurrentWordContext);

  if (!context) {
    throw new Error('useCurrentWord must be used with a CurrentWordContext');
  }

  return context;
}

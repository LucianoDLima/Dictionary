/**
 * Context to store users input and validate them
 */

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';

type ValidationType = {
  isEmpty: boolean | undefined
  isValid: boolean | undefined
  isLoading: boolean | undefined
  currentWord: string | undefined
}

type ValidationContextType = {
  validation: ValidationType;
  setValidation: Dispatch<SetStateAction<ValidationType>>;
};

const ValidationContext = createContext<ValidationContextType | undefined>(undefined);

type CurrentWordProviderProps = {
  children: ReactNode;
};

export const ValidationProvider = ({ children }: CurrentWordProviderProps): JSX.Element => {
  const [validation, setValidation] = useState<ValidationType>({
    isEmpty: undefined,
    isValid: undefined,
    isLoading: undefined,
    currentWord: undefined
  });

  return <ValidationContext.Provider value={{ validation, setValidation }}>{children}</ValidationContext.Provider>;
};

export function useValidationContext(): ValidationContextType {
  const context = useContext(ValidationContext);

  if (!context) {
    throw new Error('useErrorTrackerContext must be used with a ErrorsContext');
  }

  return context;
}

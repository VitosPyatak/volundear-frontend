import { createContext, FC, useContext, useState } from 'react';
import { SearchContextType } from './types';

export const SearchContext = createContext<SearchContextType>(null as any);

export const useSearch = () => useContext(SearchContext);

export const SearchProvider: FC = ({ children }) => {
  const [input, setInput] = useState<string>('');

  return (
    <SearchContext.Provider
      value={{
        input,
        setInput,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

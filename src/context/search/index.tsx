import { userRequestHttpProvider } from 'api/search-provider';
import { RequestModel } from 'models/request';
import { UserModel } from 'models/user';
import { createContext, FC, useContext, useState } from 'react';
import { debounce } from 'utils/debounce';
import { SearchContextType } from './types';

export const SearchContext = createContext<SearchContextType>(null as any);

export const useSearch = () => useContext(SearchContext);

export const SearchProvider: FC = ({ children }) => {
  const [input, setInput] = useState<string>('');
  const [users, setSearchUsers] = useState<UserModel[]>([]);
  const [requests, setSearchRequests] = useState<RequestModel[]>([]);

  const processSearch = (searchInput: string) => {
    userRequestHttpProvider.search(searchInput).then((response) => {
      setSearchRequests(response.requests);
      setSearchUsers(response.users);
    });
  };

  const searchHandler = debounce(processSearch);

  const onInputChange = (input: string) => {
    setInput(input);
    if (input) searchHandler(input);
  };

  const reset = () => {
    setInput('');
    setSearchRequests([]);
    setSearchUsers([]);
  };

  return (
    <SearchContext.Provider
      value={{
        input,
        onInputChange,
        users,
        requests,
        reset,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

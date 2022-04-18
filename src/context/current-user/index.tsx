import { userHttpProvider } from 'api/user-provider';
import { selfUserId } from 'components/account/mock';
import { UserModel } from 'models/user';
import { createContext, FC, useContext, useEffect, useState } from 'react';
import { CurrentUserContextType } from './types';

export const CurrentUserContext = createContext<CurrentUserContextType>(null as any);

export const useCurrentUser = () => useContext(CurrentUserContext);

export const CurrentUserProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<UserModel>();

  useEffect(() => {
    userHttpProvider.getById(selfUserId).then((response) => {
      setCurrentUser(response);
    });
  }, []);

  return <CurrentUserContext.Provider value={{ currentUser: currentUser! }}>{children}</CurrentUserContext.Provider>;
};

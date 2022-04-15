import { IconEnum } from 'types/icons';
import { storageKey } from './configs';

const getStorage = () => {
  const storage = localStorage.getItem(storageKey);
  try {
    const data = JSON.parse(storage!);
    return data;
  } catch {
    return storage;
  }
};

export const setCurrentTabToStorage = (tab: IconEnum) => {
  localStorage.setItem(storageKey, JSON.stringify({ tab }));
};

export const getCurrentTabFromStorage = () => {
  const data = getStorage();
  if (data) return data.tab;
};

import { useEffect, useState } from 'react';
import { IconSwitch } from 'uikit/icon-switch';
import { IconEnum } from 'types/icons';
import { useNavigate } from 'react-router-dom';
import { appIconsToRoutesMapping } from 'uikit/icon-switch/configs';
import { appRoutes } from 'configs/routes';
import { getCurrentTabFromStorage, setCurrentTabToStorage } from 'storage';

export const NavigationTabs = () => {
  const [selectedTab, setSelectedTab] = useState(IconEnum.dashboard);
  const navigate = useNavigate();

  const updateSelectedTab = (tabId: IconEnum) => {
    setSelectedTab(tabId);
    setCurrentTabToStorage(tabId);
    navigate(appIconsToRoutesMapping[tabId] || appRoutes.home);
  };

  useEffect(() => {
    const tab = getCurrentTabFromStorage();
    if (tab) setSelectedTab(tab);
  }, []);

  return (
    <IconSwitch
      selectedIconId={selectedTab}
      setSelectedIcon={updateSelectedTab}
      icons={[IconEnum.search, IconEnum.dashboard, IconEnum.account]}
    />
  );
};

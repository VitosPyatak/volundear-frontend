import { useEffect, useState } from 'react';
import { IconSwitch } from 'uikit/icon-switch';
import { IconEnum } from 'types/icons';
import { useNavigate } from 'react-router-dom';
import { appIconsToRoutesMapping } from 'uikit/icon-switch/configs';
import { appRoutes } from 'configs/routes';

export const NavigationTabs = () => {
  const [selectedTab, setSelectedTab] = useState(IconEnum.dashboard);
  const navigate = useNavigate();

  const updateSelectedTab = (tabId: IconEnum) => {
    if (tabId != selectedTab) {
      setSelectedTab(tabId);
      navigate(appIconsToRoutesMapping[tabId] || appRoutes.home);
    }
  };

  useEffect(() => {
    navigate(appRoutes.home);
  }, []);

  return (
    <IconSwitch
      selectedIconId={selectedTab}
      setSelectedIcon={updateSelectedTab}
      icons={[IconEnum.search, IconEnum.dashboard, IconEnum.account]}
    />
  );
};

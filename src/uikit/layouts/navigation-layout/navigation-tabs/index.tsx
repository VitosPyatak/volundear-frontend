import { useEffect, useState } from 'react';
import { IconSwitch } from 'uikit/icon-switch';
import { IconEnum, IconType } from 'types/icons';
import { useNavigate } from 'react-router-dom';
import { appIconsMapping, appIconsToRoutesMapping } from 'uikit/icon-switch/configs';
import { appRoutes } from 'configs/routes';
import { getCurrentTabFromStorage, setCurrentTabToStorage } from 'storage';
import classes from './styles.module.scss';
import { IconWrapper } from 'uikit/icon-wrapper';

export const NavigationTabs = () => {
  const [selectedTab, setSelectedTab] = useState(IconEnum.dashboard);
  const navigate = useNavigate();

  const updateSelectedTab = (tabId: IconEnum) => {
    setSelectedTab(tabId);
    setCurrentTabToStorage(tabId);
    navigate(appIconsToRoutesMapping[tabId] || appRoutes.home);
  };

  const createWrapperProps = (iconId: IconEnum, iconType?: IconType) => {
    const isSelected = iconId === selectedTab;
    return { setSelectedIcon: updateSelectedTab, iconId, isSelected, iconType };
  };

  useEffect(() => {
    const tab = getCurrentTabFromStorage();
    if (tab) setSelectedTab(tab);
  }, []);

  return (
    <div className={classes.container}>
      <IconWrapper {...createWrapperProps(IconEnum.search, IconType.search)} />
      <IconWrapper {...createWrapperProps(IconEnum.dashboard)} />
      <IconWrapper {...createWrapperProps(IconEnum.account)} />
    </div>
  );
};

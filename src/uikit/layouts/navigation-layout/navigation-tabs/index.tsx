import { useState } from 'react';
import { IconSwitch } from 'uikit/icon-switch';
import { IconEnum } from 'uikit/icon-switch/types';

export const NavigationTabs = () => {
  const [selectedTab, setSelectedTab] = useState(IconEnum.dashboard);

  return (
    <IconSwitch
      withRedirect
      selectedIconId={selectedTab}
      setSelectedIcon={setSelectedTab}
      icons={[IconEnum.search, IconEnum.dashboard, IconEnum.account]}
    />
  );
};

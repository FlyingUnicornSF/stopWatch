import React from 'react';
import {TabInfo} from './index';

interface TabpanelProps {
  activeTab: number;
  tabContents: Map<number, TabInfo>;
}

function getTabContent(props: TabpanelProps) {
  const tabContents = props.tabContents;
  const activeTab = props.activeTab;
  const content = tabContents.get(activeTab);
  return content?.content;
}

export function Tabpanel(props: TabpanelProps) {
  const content = getTabContent(props);
  return (
    <div style={{display: 'flex'}} role="tabpanel">
      {content}
    </div>
  );
}

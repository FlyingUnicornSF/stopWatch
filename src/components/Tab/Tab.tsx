import React, { useState } from 'react';
import { Tablist, TabListTabInfo } from './index';
export interface TabInfo {
  tabIndex: number;
  text: string;
}
interface TabProps {
  defaultTab: number;
  tabs: TabInfo[];
}

function getTabInfo (props: TabProps, tabsIndex: number):TabListTabInfo[] {
  const output:TabListTabInfo[] = [];

  for(let i=0; i<props.tabs.length; i++) {
    const tab = props.tabs[i];
    const newTab:TabListTabInfo = {} as TabListTabInfo;
    newTab.tabIndex = tab.tabIndex;
    newTab.ARIASelected = tabsIndex === tab.tabIndex ? true : false;
    newTab.text = tab.text;
    output.push(newTab)
  }
  return output;

}

export function Tab(props: TabProps) {
  const [tabsIndex, setTabIndex] = useState(0);
  const tabs = getTabInfo(props, tabsIndex);
  return (
    <>
      <Tablist
        defaultTab={0}
        activeTab={tabsIndex}
        tabs={tabs}
        onClick={(tabIndex:number)=>setTabIndex(tabIndex)}
      />
      <div role="tabpanel">

      </div>
    </>
  )
}
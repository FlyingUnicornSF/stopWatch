import React, {useState, useEffect} from 'react';
import {Tablist, TabListTabInfo, Tabpanel} from './index';

export interface TabInfo {
  tabIndex: number;
  text: string;
  content: JSX.Element;
}

interface TabProps {
  defaultTab: number;
  tabs: TabInfo[];
}

function makeContentsMap(tabs: TabInfo[]) {
  let output = new Map();
  for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i];
    output.set(tab.tabIndex, tab);
  }
  return output;
}

function getTabInfo(props: TabProps, tabsIndex: number): TabListTabInfo[] {
  const output: TabListTabInfo[] = [];

  for (let i = 0; i < props.tabs.length; i++) {
    const tab = props.tabs[i];
    const newTab: TabListTabInfo = {} as TabListTabInfo;
    newTab.tabIndex = tab.tabIndex;
    newTab.ARIASelected = tabsIndex === tab.tabIndex ? true : false;
    newTab.text = tab.text;
    output.push(newTab);
  }
  return output;
}

export function Tabs(props: TabProps) {
  const [tabsIndex, setTabIndex] = useState(props.defaultTab);
  const tabs = getTabInfo(props, tabsIndex);
  const [contentsMap, setContentsMap] = useState(() => {
    const initialContentsMap = makeContentsMap(props.tabs);
    return initialContentsMap;
  });

  return (
    <>
      <Tablist
        activeTab={tabsIndex}
        tabs={tabs}
        onClick={(tabIndex: number) => setTabIndex(tabIndex)}
      />
      <Tabpanel activeTab={tabsIndex} tabContents={contentsMap} />
    </>
  );
}

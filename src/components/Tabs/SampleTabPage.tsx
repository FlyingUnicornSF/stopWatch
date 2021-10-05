import React from 'react';
import {Tabs} from './index';
import {TabInfo} from './Tabs';

export function SampleTabPage(){
  const sampleTabs: TabInfo[] = [
    {tabIndex: 1, text: 'Tab 1', content: <div>Tab 1 content</div>},
    {tabIndex: 2, text: 'Tab 2', content: <div>Tab 1 content</div>},
    {tabIndex: 3, text: 'Tab 3', content: <div>Tab 1 content</div>},
    {tabIndex: 4, text: 'Tab 4', content: <div>Tab 1 content</div>},
    {tabIndex: 5, text: 'Tab 5', content: <div>Tab 1 content</div>},
  ]
  return (
    <Tabs
      defaultTab={3}
      tabs={sampleTabs}
    />
  )
}
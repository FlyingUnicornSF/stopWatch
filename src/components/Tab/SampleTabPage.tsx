import React, { useState } from 'react';import {Tab} from './index';
import {TabInfo} from './Tab';

export function SampleTabPage(){
  const sampleTabs: TabInfo[] = [
    {tabIndex: 1, text: 'Tab 1'},
    {tabIndex: 2, text: 'Tab 2'},
    {tabIndex: 3, text: 'Tab 3'},
    {tabIndex: 4, text: 'Tab 4'},
    {tabIndex: 5, text: 'Tab 5'},
  ]
  return (
    <Tab
      defaultTab={3}
      tabs={sampleTabs}
    />
  )
}
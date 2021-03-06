import React, {useState} from 'react';
import {BaseButton, ButtonTypes, ButtonDesignTag} from '../Buttons';
import {TabInfo} from './index';

interface TablistProps {
  activeTab: string | number;
  tabs: TabListTabInfo[];
  onClick: (tabIndex: number) => void;
}

export interface TabListTabInfo extends TabInfo {
  ARIASelected: boolean;
}

function getTabs(props: TablistProps) {
  const tabs = props.tabs;
  return tabs.map((tab: TabListTabInfo) => {
    return (
      <BaseButton
        text={tab.text}
        type={ButtonTypes.button}
        buttonDesignTag={ButtonDesignTag.textButton}
        disabled={false}
        visibile={true}
        role={'tab'}
        ARIASelected={tab.ARIASelected}
        onClick={() => {
          props.onClick(tab.tabIndex);
        }}
        tabIndex={tab.tabIndex}
        key={tab.tabIndex}
      />
    );
  });
}

export function Tablist(props: TablistProps) {
  return (
    <div style={{display: 'flex'}} role="tablist">
      {getTabs(props)}
    </div>
  );
}

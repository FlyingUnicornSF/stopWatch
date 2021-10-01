import React, { useState } from 'react';
import { BaseButton, ButtonTypes, ButtonDesignTag } from '../Buttons';
import {TabInfo} from './index';

interface TablistProps {
  defaultTab: string | number;
  activeTab: string | number;
  tabs: TabListTabInfo[];
  onClick: (tabIndex:number)=>void;
}

export interface TabListTabInfo  extends TabInfo{
  ARIASelected: boolean;
}

function getTabs(props: TablistProps){
  const tabs = props.tabs;
  return tabs.map((tab: TabListTabInfo)=>{
    return (
      <BaseButton
        text={tab.text}
        type={ButtonTypes.button}
        buttonDesignTag={ButtonDesignTag.textButton}
        disabled={false}
        visibile={true}
        role={'tab'}
        ARIASelected={tab.ARIASelected}
        // onClick={(tab.tabIndex) => {props.tabIndex}}
        // tabIndex={tab.tabIndex}
      />
    )
  })
}

export function Tablist(props: TablistProps) {

  return (
    <div role="tablist">
      <BaseButton
        text="click here"
        type={ButtonTypes.button}
        buttonDesignTag={ButtonDesignTag.textButton}
        disabled={false}
        visibile={true}
        role={'tab'}
        ARIASelected={true}
        onClick={() => { }}
      />
      <BaseButton
        text="click here"
        type={ButtonTypes.button}
        buttonDesignTag={ButtonDesignTag.textButton}
        disabled={false}
        visibile={true}
        role={'tab'}
      />
      <BaseButton
        text="click here"
        type={ButtonTypes.button}
        buttonDesignTag={ButtonDesignTag.textButton}
        disabled={false}
        visibile={true}
        role={'tab'}
      />
    </div>
  )
}
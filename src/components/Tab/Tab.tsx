import React from 'react';
import { BaseButton, ButtonTypes, ButtonDesignTag } from '../Buttons';

// getTabList(){


//   <BaseButton
//     text="click here"
//     type={ButtonTypes.button}
//     buttonDesignTag={ButtonDesignTag.tabButton}
//     disabled={false}
//     visibile={true}
//   />

// }
// getTabPanel(){

// }

/// need mechanics to change diabled

interface TabProps { }
export function Tab(props: TabProps) {


  return (
    <>
      <div role="tablist">
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
        <BaseButton
          text="click here"
          type={ButtonTypes.button}
          buttonDesignTag={ButtonDesignTag.textButton}
          disabled={false}
          visibile={true}
          role={'tab'}
        />
      </div>
      <div role="tabpanel">

      </div>
    </>
  )
}
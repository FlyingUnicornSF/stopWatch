import React from "react";
import { BaseButton, ButtonTypes, ButtonDesignTag } from '../Buttons';

export function Tabpanel() {

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
}
import React from "react";
import { BaseButton, ButtonTypes, ButtonDesignTag } from './Button';

export function SampleButtonPage (){
  return (
       <>
        <p>Basic buttons - ButtonDesignTag.basicButton</p>
        <BaseButton
          text="Basic button"
          type={ButtonTypes.button}
          buttonDesignTag={ButtonDesignTag.basicButton}
          disabled={false}
          visibile={true}
          leadingIcon={'search'}
        />
        <BaseButton
          text="Disabled button"
          type={ButtonTypes.button}
          buttonDesignTag={ButtonDesignTag.basicButton}
          disabled={true}
          visibile={true}
        />
        <p>Text buttons - ButtonDesignTag.textButton</p>
        <BaseButton
          text="Text button"
          type={ButtonTypes.button}
          buttonDesignTag={ButtonDesignTag.textButton}
          disabled={false}
          visibile={true}
        />
        <BaseButton
          text="Text Disabled"
          type={ButtonTypes.button}
          buttonDesignTag={ButtonDesignTag.textButton}
          disabled={true}
          visibile={true}
          leadingIcon={'search'}
        />
        <p>Text button with white font - ButtonDesignTag.textButtonLight</p>
        <div style={{backgroundColor: 'black', width: '250px'}}>
        <BaseButton
          text="Text button Light"
          type={ButtonTypes.button}
          buttonDesignTag={ButtonDesignTag.textButtonLight}
          disabled={false}
          visibile={true}
          leadingIcon={'search'}
        />
        <BaseButton
          text="Text button Light"
          type={ButtonTypes.button}
          buttonDesignTag={ButtonDesignTag.textButtonLight}
          disabled={true}
          visibile={true}
          leadingIcon={'search'}
        />
        </div>
        <p>countained incon button - ButtonDesignTag.iconButtonContained</p>
        <BaseButton
          text=""
          type={ButtonTypes.button}
          buttonDesignTag={ButtonDesignTag.iconButtonContained}
          disabled={false}
          visibile={true}
          leadingIcon={'close'}
        />
        <BaseButton
          text=""
          type={ButtonTypes.button}
          buttonDesignTag={ButtonDesignTag.iconButtonContained}
          disabled={true}
          visibile={true}
          leadingIcon={'menu'}
        />
        <p>not countained icon buttons - ButtonDesignTag.iconButton</p>
        <BaseButton
          text=""
          type={ButtonTypes.button}
          buttonDesignTag={ButtonDesignTag.iconButton}
          disabled={false}
          visibile={true}
          leadingIcon={'menu'}
        />
        <BaseButton
          text=""
          type={ButtonTypes.button}
          buttonDesignTag={ButtonDesignTag.iconButton}
          disabled={true}
          visibile={true}
          leadingIcon={'menu'}
        />
        <p>Text button with white font - ButtonDesignTag.iconButtonLight</p>
        <div style={{backgroundColor: 'black', width: '250px'}}>
        <BaseButton
          text=""
          type={ButtonTypes.button}
          buttonDesignTag={ButtonDesignTag.iconButtonLight}
          disabled={false}
          visibile={true}
          leadingIcon={'menu'}
        />
        <BaseButton
          text=""
          type={ButtonTypes.button}
          buttonDesignTag={ButtonDesignTag.iconButtonLight}
          disabled={true}
          visibile={true}
          leadingIcon={'menu'}
        />
        </div>
        <BaseButton
          text="click here"
          type={ButtonTypes.button}
          buttonDesignTag={ButtonDesignTag.textButton}
          disabled={false}
          visibile={true}
          role={'tab'}
        />
      </>
  );
}
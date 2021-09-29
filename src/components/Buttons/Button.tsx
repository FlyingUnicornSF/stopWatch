import React from 'react';
import styles from './Button.module.scss'

interface BaseButtonProps {
  text: string;
  type: ButtonTypes;
  onClick?: () => void;
  distabled: boolean;
  visibile: boolean;
  buttonDesignTag: ButtonDesignTag;
  formId?: string;
  value?: string | number;
  leadingIcon?: string;
  styleOverRide?: React.CSSProperties;
}

export enum ButtonTypes {
  submit = 'submit',
  reset = 'reset',
  button = 'button'
}

export enum ButtonDesignTag {
  basicButton = 'basicButton',
  textButton = 'textButton',
  iconButton = 'iconButton',
  iconButtonLight = 'iconButtonLight'
}

function getClassName(designTag: ButtonDesignTag){
  switch (designTag) {
    case ButtonDesignTag.basicButton:
      return styles.button;
    case ButtonDesignTag.textButton:
      return styles['text-button'];
    case ButtonDesignTag.iconButton:
      return styles['icon-button'];
    case ButtonDesignTag.iconButtonLight:
      return styles['icon-button-light'];
    default:
      return styles.button;
  }
}

function getLeadingIcon(iconName: string | undefined){
  if(typeof iconName === 'string') {
    return (
      <span className={`${styles['button-icon']} material-icons-outlined`}>
          {iconName}
      </span>
    )
  }
}
/**
 *
 * @param props
 * ```
  text: string;
  type: ButtonTypes;
  onClick?: ()=>void;
  distabled: boolean;
  visibile: boolean;
  buttonDesignTag: ButtonDesignTag;
  formId?: string;
  value?: string | number;
  leadingIcon?: string;
  styleOverRide?: React.CSSProperties;
```
 * @returns JSX.Element button tag
 */
export function BaseButton(props: BaseButtonProps) {
  const designTag = props.buttonDesignTag;
  const buttonClassName = getClassName(designTag);
  const leadingIcon = getLeadingIcon(props.leadingIcon);
  return (
    <button
      className={buttonClassName}
      form={props.formId}
      type={props.type}
      value={props.value}
      onClick={() => {
        props.onClick ?
          props.onClick() : null
      }}
      style={props.styleOverRide}
    >
      {leadingIcon}
      {props.text}
    </button>
  )
}


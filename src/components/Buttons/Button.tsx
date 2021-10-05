import React from 'react';
import styles from './Button.module.scss';

interface BaseButtonProps {
  text: string;
  type: ButtonTypes;
  onClick?: () => void;
  disabled: boolean;
  visibile: boolean;
  buttonDesignTag: ButtonDesignTag;
  ARIASelected?: boolean;
  formId?: string;
  value?: string | number;
  leadingIcon?: string;
  styleOverRide?: React.CSSProperties;
  role?: string;
  tabIndex?: number;
  key?: number;
}

export enum ButtonTypes {
  submit = 'submit',
  reset = 'reset',
  button = 'button',
}

export enum ButtonDesignTag {
  basicButton = 'basicButton',
  textButton = 'textButton',
  textButtonLight = 'textButtonLight',
  iconButtonContained = 'iconButtonContained',
  iconButtonLight = 'iconButtonLight',
  iconButton = 'iconButton',
}

function getClassName(designTag: ButtonDesignTag) {
  switch (designTag) {
    case ButtonDesignTag.basicButton:
      return styles.button;
    case ButtonDesignTag.textButton:
      return styles['text-button'];
    case ButtonDesignTag.textButtonLight:
      return styles['text-button-light'];
    case ButtonDesignTag.iconButtonContained:
      return `${styles.button} ${styles['icon-button']}`;
    case ButtonDesignTag.iconButton:
      return `${styles['text-button']} ${styles['icon-button']}`;
    case ButtonDesignTag.iconButtonLight:
      return `${styles['text-button-light']} ${styles['icon-button']}`;
    default:
      return styles.button;
  }
}

function getLeadingIcon(iconName: string | undefined) {
  if (typeof iconName === 'string') {
    return <span className="material-icons-outlined">{iconName}</span>;
  }
}

function getAreaSelected(areaSelected: boolean | undefined) {
  if (areaSelected === true) {
    return true;
  } else if (areaSelected === false) {
    return false;
  } else {
    return undefined;
  }
}
/**
 *
 * @param props
 * ```
  text: string;
  type: ButtonTypes;
  onClick?: ()=>void;
  disabled: boolean;
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
  const role = props.role ?? undefined;
  const selected = getAreaSelected(props.ARIASelected);
  return (
    <button
      className={buttonClassName}
      form={props.formId}
      role={role}
      type={props.type}
      value={props.value}
      onClick={() => {
        props.onClick ? props.onClick() : null;
      }}
      style={props.styleOverRide}
      aria-selected={selected}
      disabled={props.disabled}
      tabIndex={props.tabIndex}
    >
      {leadingIcon}
      {props.text}
    </button>
  );
}

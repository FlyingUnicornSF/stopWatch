import React from 'react';
import styles from './Button.module.scss'

interface BaseButtonProps {
  text: string;
  type: ButtonTypes;
  onClick?: () => void;
  distabled: boolean;
  visibile: boolean;
  formId?: string;
  value?: string | number;
  leadingIcon?: JSX.Element;
}

export enum ButtonTypes {
  submit = 'submit',
  reset = 'reset',
  button = 'button'
}
/**
 *
 * @param props
 * ```text: string;
  type: ButtonTypes;
  onClick?: ()=>void;
  distabled: boolean;
  visibile: boolean;
  formId?: string;
  value?: string | number;
  leadingIcon?: JSX.Element;
```
 * @returns
 */
export function BaseButton(props: BaseButtonProps) {
  const leadingIcon = props.leadingIcon ?? null
  return (
    <button
      className={styles.button}
      form={props.formId}
      type={props.type}
      value={props.value}
      onClick={() => {
        props.onClick ?
          props.onClick() : null
      }}
    >
      <span className={`${styles['button-icon']} material-icons-outlined`}>
        search
      </span>
      {leadingIcon}
      {props.text}
    </button>
  )
}


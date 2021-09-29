import React from 'react';
import {BaseButton, ButtonDesignTag, ButtonTypes} from '../Buttons';

import styles from './Drawer.module.scss';

export interface DrawerProps {
  closeDrawer:()=>void;
  open: boolean;
  title: string;
  position: string;
  width?: string;
  contents?: JSX.Element;
  footer?: JSX.Element;
  id?: string;
}

export enum DrawerPosition {
  left='left',
  right='right'
}

function getClassName(open: boolean): string{
  console.log('getclassName, ', open)
  if(open === true) {
    return styles.drawer;
  } else {
    return styles['drawer-closed'];
  }
}

function getWidth(open: boolean, width: string | undefined) {
  if(typeof width !== 'string') return;
  if(open === true) {
    return width;
  } else {
    return '0px';
  }
}

/**
 *
 *
 *
 * @param props
 * ```
  closeDrawer:()=>void;
  open: boolean;
  title: string;
  position: string;
  width?: string;
  contents?: JSX.Element;
  footer?: JSX.Element;
  ```
 * @returns JSX.Element drawer
 */
export function Drawer(props: DrawerProps): JSX.Element {
  const className = getClassName(props.open);
  const width = getWidth(props.open, props.width);
  console.log(className)
  return (
    <div
      id={props.id}
      className={className}
      style={{width: width}}
      onMouseOut={()=>props.closeDrawer()}
    >
      <header
        style={{textAlign: 'center'}}
      >
        <BaseButton
          text={''}
          type={ButtonTypes.button}
          onClick={()=>props.closeDrawer()}
          distabled={false}
          visibile={true}
          buttonDesignTag={ButtonDesignTag.iconButtonLight}
          leadingIcon={'close'}
          styleOverRide={{ position: 'relative', top: '-0.8rem', float: 'right', marginRight: '-0.8rem'}}
        />
        <h2>{props.title}</h2>
      </header>
      <main>
        {props.contents}
      </main>
      <footer>
        {props.footer}
      </footer>
    </div>
  )
}
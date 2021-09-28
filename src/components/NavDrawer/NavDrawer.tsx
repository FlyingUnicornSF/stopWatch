import React, { useState } from 'react';
import {BaseButton, ButtonDesignTag, ButtonTypes} from '../Buttons';

import styles from './SideNav.module.scss';

export interface NavDrawerProps {
  closeNavDrawer:()=>void;
  open: boolean;
}

function getClassName(open: boolean): string{
  if(open === true) {
    return styles.sidenav;
  } else {
    return styles['sidenav-closed'];
  }
}

/**
 *
 * @param props
 * @returns JSX.Element side nav drawer
 */
export function NavDrawer(props: NavDrawerProps): JSX.Element {
  const className = getClassName(props.open);
  return (
    <div
      id="side-nav-drawer"
      className={className}
    >
      <BaseButton
        text={''}
        type={ButtonTypes.button}
        onClick={()=>props.closeNavDrawer()}
        distabled={false}
        visibile={true}
        buttonDesignTag={ButtonDesignTag.textButton}
        leadingIcon={'close'}
      />
      <a
        href="#"
      >
        About
      </a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>
  )
}
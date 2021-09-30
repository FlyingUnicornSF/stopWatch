import React from 'react';
import { Drawer } from '../Drawer';
import { BaseButton, ButtonTypes, ButtonDesignTag } from '../../components/Buttons';

import styles from './NavDrawer.module.scss';


interface NavDrawerProps {
  closeNavDrawer: () => void;
  open: boolean;
}

function getContents(){
  return(
    <>
      <a
        href="#"
      >
        About
      </a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </>
  )
}

function getFooter(){
  return (
    <BaseButton
      text={'Log out'}
      disabled={false}
      type={ButtonTypes.button}
      visibile={true}
      buttonDesignTag={ButtonDesignTag.textButtonLight}
    />
  )
}
/**
 *
 * @param props
 * @returns JSX.Element side nav drawer
 */
export function NavDrawer(props: NavDrawerProps): JSX.Element {
  console.log("NavDrawer", props)
  return (
    <Drawer
      closeDrawer={() => props.closeNavDrawer()}
      title="Side Nav Bar"
      open={props.open}
      position={'left'}
      width={'250px'}
      contents={getContents()}
      footer={getFooter()}
    />
  )
}
import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import { Drawer } from '../Drawer';
import { BaseButton, ButtonTypes, ButtonDesignTag } from '../../components/Buttons';

import styles from './NavDrawer.module.scss';


interface NavDrawerProps {
  closeNavDrawer: () => void;
  open: boolean;
}

function getContents() {
  return (

    <nav>

      <div className={styles['nav-drawer-items']}>
        <Link to="/">Home</Link>
      </div>
      <div className={styles['nav-drawer-items']}>
        <Link to="/SampleButtonPage">SampleButtonPage</Link>
      </div>
      <div className={styles['nav-drawer-items']}>

        <Link to="/SampleTabPage">SampleTabPage</Link>
      </div>
      <div className={styles['nav-drawer-items']}>

        <Link to="/users">Users</Link>
      </div>
      <div className={styles['nav-drawer-items']}>
        <Link to="/users">Users</Link>
      </div>
    </nav>

  )
}

function getFooter() {
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
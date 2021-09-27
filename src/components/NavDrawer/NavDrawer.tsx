import React, { useState } from 'react';
import {BaseButton, ButtonDesignTag, ButtonTypes} from '../Buttons';

import styles from './SideNav.module.scss';

interface NavDrawerProps {

}

export function NavDrawer(props: NavDrawerProps) {
  const [open, setOpen] = useState(false);
  return (
    <div
      id="mySidenav"
      className="sidenav"
    >
      <BaseButton
        text={''}
        type={ButtonTypes.button}
        onClick={()=>setOpen(false)}
        distabled={false}
        visibile={true}
        buttonDesignTag={ButtonDesignTag.textButton}
        leadingIcon={'search'}
      />
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>
  )
}
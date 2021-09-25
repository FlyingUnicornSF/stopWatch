import React from 'react';
import styles from './SideNav.module.scss';

interface NavDrawerProps {

}
export function NavDrawer (props: NavDrawerProps) {
  return (
  <div id="mySidenav" className="sidenav">
  <a href="javascript:void(0)" className="closebtn" onClick="closeNav()">&times;</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>
  )
}
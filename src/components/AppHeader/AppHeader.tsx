import React from 'react';
import {BaseButton, ButtonTypes, ButtonDesignTag} from '../Buttons';
import styles from './AppHeader.module.scss';

interface AppHeaderProps {
  openSideNav: () => void;
}

export function AppHeader(props: AppHeaderProps) {
  return (
    <header
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        minHeight: '3rem',
      }}
      className={styles['app-header']}
    >
      <BaseButton
        text=""
        type={ButtonTypes.button}
        buttonDesignTag={ButtonDesignTag.iconButtonLight}
        disabled={false}
        visibile={true}
        leadingIcon={'menu'}
        onClick={() => props.openSideNav()}
        styleOverRide={{color: 'white'}}
      />
      <h3>I'm the app header!!!</h3>
    </header>
  );
}
/**
 *
 *
 * <header class="page-header">
    <h1>Cute Puppies Express!</h1>
</header>

<main>
    <p>I love beagles <em>so</em> much! Like, really, a lot. They’re adorable and their ears are so, so snuggly soft!</p>
</main>
 */

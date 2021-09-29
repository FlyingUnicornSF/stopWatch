import React from 'react';
import { BaseButton, ButtonTypes, ButtonDesignTag } from '../Buttons';

interface AppHeaderProps {
  openSideNav: ()=>void
}

export function AppHeader(props: AppHeaderProps) {
  return (
    <header
      style={{display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: 'blue'}}
    >
      <BaseButton
        text=""
        type={ButtonTypes.button}
        buttonDesignTag={ButtonDesignTag.iconButton}
        distabled={true}
        visibile={true}
        leadingIcon={'menu'}
        onClick={() => props.openSideNav()}
        styleOverRide={{color: 'white'}}
      />
      <h1>Cute Puppies Express!</h1>
    </header>
  )
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
import React, { Component } from "react";
import "./App.css";

import { BaseButton, ButtonTypes, ButtonDesignTag } from './components/Buttons';
import { NavDrawer } from './components/NavDrawer';
import Stopwatch from './components/Stopwatch/Stopwatch';
import { AppHeader } from './components/AppHeader';


interface Props { }
interface State {
  navDrawerOpen: boolean
}
class App extends Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.state = {
      navDrawerOpen: false,
    }
  }

  /**
   *
   * @param open if true, nav drawer open
   */
  openSideNav(open: boolean): void {
    if(open === true) {
      console.log('open')
      this.setState({navDrawerOpen: true})
    } else {
      console.log('close')
      this.setState({navDrawerOpen: false})
    }
  }

  render() {
    const navDrawerOpen = this.state.navDrawerOpen;
    return (
      <div className="App">
        <AppHeader
          openSideNav={() => this.openSideNav(true)}
        />
        <main>
          <NavDrawer
            open={navDrawerOpen}
            closeNavDrawer={() => this.openSideNav(false)}
          />
          <Stopwatch />
          <BaseButton
            text="Basic button"
            type={ButtonTypes.button}
            buttonDesignTag={ButtonDesignTag.basicButton}
            distabled={true}
            visibile={true}
            leadingIcon={'search'}
          />
          <BaseButton
            text="Basic button"
            type={ButtonTypes.button}
            buttonDesignTag={ButtonDesignTag.basicButton}
            distabled={true}
            visibile={true}
          />
          <BaseButton
            text="Text button"
            type={ButtonTypes.button}
            buttonDesignTag={ButtonDesignTag.textButton}
            distabled={true}
            visibile={true}
          />
          <BaseButton
            text="Text button"
            type={ButtonTypes.button}
            buttonDesignTag={ButtonDesignTag.textButton}
            distabled={true}
            visibile={true}
            leadingIcon={'search'}
          />
          <BaseButton
            text=""
            type={ButtonTypes.button}
            buttonDesignTag={ButtonDesignTag.iconButton}
            distabled={true}
            visibile={true}
            leadingIcon={'close'}
          />
          <BaseButton
            text=""
            type={ButtonTypes.button}
            buttonDesignTag={ButtonDesignTag.iconButton}
            distabled={true}
            visibile={true}
            leadingIcon={'menu'}
          />
          <BaseButton
            text=""
            type={ButtonTypes.button}
            buttonDesignTag={ButtonDesignTag.iconButtonLight}
            distabled={true}
            visibile={true}
            leadingIcon={'menu'}
          />
          <p> Hello, World! </p>
        </main>
      </div>
    );
  }
}

export default App;
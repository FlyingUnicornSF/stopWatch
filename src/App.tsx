import React, { Component} from "react";
import "./App.css";

import {BaseButton,  ButtonTypes,  ButtonDesignTag} from './components/Buttons';
import {NavDrawer} from './components/NavDrawer';
import Stopwatch from './components/Stopwatch/Stopwatch';

interface Props {}
interface State {
  navDrawerOpen: boolean
}
class App extends Component<Props, State>{
  constructor(props:Props){
    super(props);
    this.state ={
      navDrawerOpen: false,
    }
  }

  /**
   *
   * @param open if true, nav drawer open
   */
  openSideNav(open: boolean): void{
    this.setState({navDrawerOpen: open})
  }

  render(){
    const navDrawerOpen = this.state.navDrawerOpen;
    return(
      <div className="App">
        <NavDrawer
          open={navDrawerOpen}
          closeNavDrawer={()=>this.openSideNav(false)}
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
          onClick={()=>{this.openSideNav(true)}}
        />
        <p> Hello, World! </p>
      </div>
    );
  }
}

export default App;
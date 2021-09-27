import React, { Component} from "react";
import "./App.css";

import {
  BaseButton,
  ButtonTypes,
  ButtonDesignTag
} from './components/Buttons';

class App extends Component{
  render(){
    return(
      <div className="App">
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
          buttonDesignTag={ButtonDesignTag.textButton}
          distabled={true}
          visibile={true}
          leadingIcon={'close'}
        />
        <p> Hello, World! </p>
      </div>
    );
  }
}

export default App;
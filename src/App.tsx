import React, { Component} from "react";
import "./App.css";

import {BaseButton, ButtonTypes} from './components/Buttons';

class App extends Component{
  render(){
    return(
      <div className="App">
        <BaseButton
          text="Basic button"
          type={ButtonTypes.button}
          distabled={true}
          visibile={true}
        />
        <p> Hello, World! </p>
      </div>
    );
  }
}

export default App;
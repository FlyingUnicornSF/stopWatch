import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import './App.css';

import {SampleButtonPage} from './components/Buttons/SampleButtonPage';
import {SampleTabPage} from './components/Tabs/SampleTabPage';

import {NavDrawer} from './components/NavDrawer';
import {AppHeader} from './components/AppHeader';

import Stopwatch from './components/Stopwatch/Stopwatch';
import AppPage from './components/Page/AppPage';

interface Props {}
interface State {
  navDrawerOpen: boolean;
}
class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      navDrawerOpen: false,
    };
  }

  /**
   *
   * @param open if true, nav drawer open
   */
  openSideNav(open: boolean): void {
    if (open === true) {
      this.setState({navDrawerOpen: true});
    } else {
      this.setState({navDrawerOpen: false});
    }
  }

  render() {
    const navDrawerOpen = this.state.navDrawerOpen;
    return (
      <div className="App">
        <AppHeader openSideNav={() => this.openSideNav(true)} />
        <Router>
          <main style={{padding: '1rem'}}>
            <Stopwatch />

            <p> Hello, World! </p>
            {/* <Tab /> */}

            <NavDrawer
              open={navDrawerOpen}
              closeNavDrawer={() => this.openSideNav(false)}
            />

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/SampleButtonPage">
                <SampleButtonPage />
              </Route>
              <Route path="/SampleTabPage">
                <SampleTabPage />
              </Route>
              <Route path="/AppPage">
                  <AppPage />
                </Route>
              {/* <Route path="/">
                  <Home />
                </Route> */}
            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}

export default App;

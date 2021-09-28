import React from 'react';
import {BaseButton,  ButtonTypes,  ButtonDesignTag} from '../Buttons';

interface Props { }
interface States {
  paused: boolean,
  seconds: number,
}

class Stopwatch extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      paused: false,
      seconds: 0,
    }
    this.startTimer = this.startTimer.bind(this);
    this.setTimeState = this.setTimeState.bind(this);
  }

  INDERVAL_ID: number | null = null;

  startTimer() {
    // check if already an interval has been set up
    if (!this.INDERVAL_ID) {
      this.INDERVAL_ID = window.setInterval(this.setTimeState, 1000);
    }
  }

  setTimeState() {
    const paused = this.state.paused;
    if (!paused) {
      let seconds = this.state.seconds;
      this.setState({
        seconds: seconds + 1
      })
    }
  }

  stopTimer() {
    if (this.INDERVAL_ID) {
      clearInterval(this.INDERVAL_ID);
      // release our intervalID from the variable
      this.INDERVAL_ID = null;
      this.setState({
        seconds: 0
      })
    }
  }
  pauseTimer(){
    const paused = this.state.paused;
    if(paused) {
      this.setState({paused: false})
    } else {
      this.setState({paused: true})
    }
  }

  render() {
    const seconds = this.state.seconds;
    return (
      <div>
        <BaseButton
          text={'start'}
          type={ButtonTypes.button}
          onClick={() => this.startTimer()}
          distabled={false}
          visibile={true}
          buttonDesignTag={ButtonDesignTag.basicButton}
        />
        <BaseButton
          text={'pause'}
          type={ButtonTypes.button}
          onClick={() => this.pauseTimer()}
          distabled={false}
          visibile={true}
          buttonDesignTag={ButtonDesignTag.basicButton}
        />
        <BaseButton
          text={'stop'}
          type={ButtonTypes.button}
          onClick={() => this.stopTimer()}
          distabled={false}
          visibile={true}
          buttonDesignTag={ButtonDesignTag.basicButton}
        />
        <p>{seconds}</p>
      </div>

    )
  }
}

export default Stopwatch;
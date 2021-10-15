import React from 'react';
import {BaseButton, ButtonTypes, ButtonDesignTag} from '../Buttons';

interface StopwatchProps {
  name: string;
  delete: () => void;
}
interface StopwatchStates {
  paused: boolean;
  seconds: number;
}

class Stopwatch extends React.Component<StopwatchProps, StopwatchStates> {
  constructor(props: StopwatchProps) {
    super(props);
    this.state = {
      paused: false,
      seconds: 0,
    };
    this.startTimer = this.startTimer.bind(this);
    this.setTimeState = this.setTimeState.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  INDERVAL_ID: number | null = null;
  componentWillUnmount() {
    this.stopTimer();
    this.setState({seconds: 0});
  }
  startTimer() {
    // check if already an interval has been set up
    if (!this.INDERVAL_ID) {
      this.INDERVAL_ID = window.setInterval(this.setTimeState, 1000);
      // this.INDERVAL_ID = window.setInterval(this.setTimeState.bind(this), 1000);
      // this.INDERVAL_ID = window.setInterval(() => {
      //   const paused = this.state.paused;
      //   if (!paused) {
      //     let seconds = this.state.seconds;
      //     this.setState({
      //       seconds: seconds + 1
      //     })
      //   }
      // }, 1000);

      //// this one doesn't work in Typescript
      // this.INDERVAL_ID = window.setInterval(function() {
      //   const paused = this.state.paused;
      //   if (!paused) {
      //     let seconds = this.state.seconds;
      //     this.setState({
      //       seconds: seconds + 1
      //     })
      //   }
      // }.bind(this), 1000);
    }
  }

  setTimeState() {
    const paused = this.state.paused;
    if (!paused) {
      let seconds = this.state.seconds;
      this.setState({
        seconds: seconds + 1,
      });
    }
  }

  stopTimer() {
    if (this.INDERVAL_ID) {
      clearInterval(this.INDERVAL_ID);
      // release our intervalID from the variable
      this.INDERVAL_ID = null;
      this.setState({
        seconds: 0,
      });
    }
  }

  pauseTimer(paused: boolean, seconds: number) {
    if (!paused && seconds !== 0) {
      this.setState({paused: true});
    } else {
      this.setState({paused: false});
    }
  }

  getStyleStartButton(seconds: number): React.CSSProperties {
    if (seconds !== 0) {
      return {backgroundColor: 'gray', color: 'black', marginLeft: '0.5rem'};
    } else {
      return {backgroundColor: 'blue', color: 'white', marginLeft: '0.5rem'};
    }
  }

  getStylePauseButton(seconds: number): React.CSSProperties {
    if (seconds === 0) {
      return {backgroundColor: 'gray', color: 'black', marginLeft: '0.5rem'};
    } else {
      return {backgroundColor: 'blue', color: 'white', marginLeft: '0.5rem'};
    }
  }

  getStylePauseText(paused: boolean): string {
    if (paused === true) {
      return 'resume';
    } else {
      return 'pause';
    }
  }

  getStyleStopButton(seconds: number): React.CSSProperties {
    if (seconds === 0) {
      return {backgroundColor: 'gray', color: 'black', marginLeft: '0.5rem'};
    } else {
      return {backgroundColor: 'blue', color: 'white', marginLeft: '0.5rem'};
    }
  }

  getHourMinSec(seconds: number): {hours: number; min: number; sec: number} {
    const hours = Math.floor(seconds / (60 * 60));
    const remainderSeconds = seconds % (60 * 60);
    const min = Math.floor(remainderSeconds / 60);
    const sec = remainderSeconds % 60;
    return {hours, min, sec};
  }

  render() {
    const seconds = this.state.seconds;
    const paused = this.state.paused;
    const getHrMinSec = this.getHourMinSec(seconds);
    const startButtonStyle = this.getStyleStartButton(seconds);
    const pauseButtonText = this.getStylePauseText(paused);
    const pauseButtonStyle = this.getStylePauseButton(seconds);
    const stopButtonStyle = this.getStyleStopButton(seconds);

    return (
      <div
        style={{
          border: 'solid gray 1px',
          maxWidth: 'fit-content',
          margin: '0.5rem',
        }}
      >
        <h3>{this.props.name}</h3>
        <div style={{display: 'flex'}}>
          <p style={{marginLeft: '0.5rem'}}>{`${getHrMinSec.hours} Hrs`}</p>
          <p style={{marginLeft: '0.5rem'}}>{`${getHrMinSec.min} Min`}</p>
          <p style={{marginLeft: '0.5rem'}}>{`${getHrMinSec.sec} Sec`}</p>

          <BaseButton
            text={'Delete'}
            type={ButtonTypes.button}
            onClick={() => this.props.delete()}
            buttonDesignTag={ButtonDesignTag.basicButton}
            styleOverRide={{
              backgroundColor: 'blue',
              marginLeft: '0.5rem',
              padding: '0.5rem',
            }}
          />
        </div>
        <div style={{display: 'flex'}}>
          <BaseButton
            text={'start'}
            type={ButtonTypes.button}
            onClick={() => this.startTimer()}
            disabled={false}
            visibile={true}
            buttonDesignTag={ButtonDesignTag.basicButton}
            styleOverRide={startButtonStyle}
          />
          <BaseButton
            text={pauseButtonText}
            type={ButtonTypes.button}
            onClick={() => this.pauseTimer(paused, seconds)}
            disabled={false}
            visibile={true}
            buttonDesignTag={ButtonDesignTag.basicButton}
            styleOverRide={pauseButtonStyle}
          />
          <BaseButton
            text={'stop'}
            type={ButtonTypes.button}
            onClick={() => this.stopTimer()}
            disabled={false}
            visibile={true}
            buttonDesignTag={ButtonDesignTag.basicButton}
            styleOverRide={stopButtonStyle}
          />
        </div>
      </div>
    );
  }
}

export default Stopwatch;

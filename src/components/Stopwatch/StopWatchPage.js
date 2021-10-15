import React from 'react';
import Stopwatch from './Stopwatch';
import {BaseButton, ButtonDesignTag} from '../Buttons';

class StopWatchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stopWatcheList: [],
    };
  }
  addStopWath(event) {
    // console.log(event.target.form)
    let nameOfStopWatch = '';
    event.target.form.forEach((element) => {
      if (element.name === 'name') {
        nameOfStopWatch = element.value;
      }
    });
    let stopWatcheList = [...this.state.stopWatcheList];
    if (nameOfStopWatch !== '') {
      stopWatcheList.push(
        <Stopwatch
          name={nameOfStopWatch}
          delete={() => this.delete(nameOfStopWatch)}
          key={nameOfStopWatch}
        />
      );
    } else {
      alert('enter name!');
    }

    this.setState({stopWatcheList});
    event.preventDefault();
  }

  delete(name) {
    let copyOfList = [...this.state.stopWatcheList];
    const stopWatcheList = copyOfList.filter(
      (stopwatch) => stopwatch.props.name !== name
    );
    this.setState({stopWatcheList});
  }

  render() {
    const listOfStopwatch = this.state.stopWatcheList;
    return (
      <form id="addStopWatch">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Give a name"
          form="addStopWatch"
        ></input>
        <BaseButton
          text={'Add stopwatch'}
          type={'submit'}
          buttonDesignTag={ButtonDesignTag.basicButton}
          onClick={(event) => this.addStopWath(event)}
          formId="addStopWatch"
          styleOverRide={{marginLeft: '0.5rem'}}
        />
        {listOfStopwatch}
      </form>
    );
  }
}

export default StopWatchPage;

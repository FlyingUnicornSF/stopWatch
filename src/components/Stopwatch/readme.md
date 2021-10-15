# Interview question 2

- make a stopwatch app that user can add multiple stop watches
- each stopwatch has start/pause/stop buttons
- each stopwatch has a name
- each stopwatch comes with delete button
- when a stopwatch initially loads, start button is enabled and rest of the buttons are disaled
- when a stopwatch starts, pause/stop buttons are enabled and start is disabled
- when paused, pause button text changes to resume

(They expected me to do this in less than one hour.)

### What they (probably) want to know if you know
- how to bind setInterval callback function
  - there are multiple ways to do this
- how to life states up to a parent component
- how to make a form
- how to find a property of a module/class/object

  ```
  // class component
  class Foo {
    constructor (name) {
      this.name = name
    }
  }
  const moo = new Foo('Ushi-taro');
  console.log(moo.name) // 'Ushi-taro'

  // functional component
  function Fooo(name){
    this.name = name;
  }
  const mooooo = new Fooo('Ushi-jiro')
  console.log(mooooo.name) // 'Ushi-jiro'
  ```



maybe? ¯\\_(ツ)_/¯
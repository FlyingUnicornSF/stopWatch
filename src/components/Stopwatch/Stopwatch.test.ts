import Stopwatch from './Stopwatch';

const StopwatchComponent = new Stopwatch({});

test('seconds to hour, min conversion', ()=>{
  const {hours, min, sec} = StopwatchComponent.getHourMinSec(7507);
  expect(hours).toBe(2);
  expect(min).toBe(5);
  expect(sec).toBe(7);
})
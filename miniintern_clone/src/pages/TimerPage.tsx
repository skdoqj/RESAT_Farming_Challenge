import { useState } from "react";

function Timer() {
  let [time, setTime] = useState({ hour: 0, minute: 0, seconds: 0 });

  let [hour, setHour] = useState(0);
  let [minute, setMinute] = useState(0);
  let [seconds, setSeconds] = useState(0);

  let [a, setA] = useState(false);

  //input 시간
  const hourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hourInput = Number(e.target.value);
    setHour(hourInput);
  };
  const minuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const minuteInput = Number(e.target.value);
    setMinute(minuteInput);
  };
  const secondsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const secondsInput = Number(e.target.value);
    setSeconds(secondsInput);
  };

  let minSec = minute * 60;
  let hourSec = hour * 3600;
  let realSec = seconds + minSec + hourSec;

  //카운트 다운 함수
  const startClick = () => {
    // setTime({ ...time, hour: hhour });
    setInterval(operatorTimer, 1000);
    setA(!a);
  };

  const operatorTimer = () => {
    realSec--;
    console.log(realSec);
    let realHour = Math.floor(realSec / 3600);
    let realMin = Math.floor((realSec - realHour * 3600) / 60);
    let realSeconds = realSec - realHour * 3600 - realMin * 60;
    setTime({ hour: realHour, minute: realMin, seconds: realSeconds });
  };
  console.log(time);

  const stopClick = () => {};
  const resetClick = () => {};

  return (
    <>
      <h1>Count Down Timer</h1>

      <input
        onChange={hourChange}
        type="number"
        id="hour"
        placeholder="00"
      ></input>
      <input
        onChange={minuteChange}
        type="number"
        id="minute"
        placeholder="00"
      ></input>
      <input
        onChange={secondsChange}
        type="number"
        id="seconds"
        placeholder="00"
      ></input>

      <div>
        <button onClick={startClick}>start</button>
        <button onClick={stopClick}>STOP</button>
        <button onClick={resetClick}>RESET</button>
        <div></div>
      </div>
    </>
  );
}
export default Timer;

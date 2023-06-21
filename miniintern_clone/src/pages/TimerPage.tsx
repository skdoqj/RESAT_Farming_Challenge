import { useRef, useState } from "react";
import * as S from "../styles/timerStyle";

function Timer() {
  let [time, setTime] = useState({ hour: 0, minute: 0, seconds: 0 });

  let [hour, setHour] = useState(0);
  let [minute, setMinute] = useState(0);
  let [seconds, setSeconds] = useState(0);

  let [lock, setLock] = useState(false);

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

  let intervalID: any = useRef();
  console.log(intervalID);

  //카운트 다운 함수
  const startClick = () => {
    clearInterval(intervalID.current);
    // setTime({ ...time, hour: hhour });
    intervalID.current = setInterval(operatorTimer, 1000);
    setLock(true);
  };

  const operatorTimer = () => {
    realSec--;
    console.log(realSec);
    let realHour = Math.floor(realSec / 3600);
    let realMin = Math.floor((realSec - realHour * 3600) / 60);
    let realSeconds = realSec - realHour * 3600 - realMin * 60;
    setTime({ hour: realHour, minute: realMin, seconds: realSeconds });

    if (realSec <= 0) {
      clearInterval(intervalID.current);
    }
  };
  console.log(time);

  const stopClick = () => {
    console.log("stop");
    clearInterval(intervalID.current);
  };
  const resetClick = () => {
    clearInterval(intervalID.current);
    setLock(false);
    setHour(0);
    setMinute(0);
    setSeconds(0);
  };

  return (
    <>
      <h1>Count Down Timer</h1>
      {lock === true ? (
        <>
          <span>{time.hour} :</span>
          <span>{time.minute} : </span>
          <span>{time.seconds}</span>
        </>
      ) : (
        <>
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
        </>
      )}

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

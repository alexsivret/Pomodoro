import React, { useState } from "react";

import useInterval from "../utils/useInterval";
import BreakTime from "./BreakTime.js";
import FocusTime from "./FocusTime.js";
import StartStop from "./StartStop.js";
import Timer from "./Timer.js";

//Putting all the moving parts in seperate files. This file is already too messy to start with.
function Pomodoro() {
  // Timer starts out paused
  const [isTimerRunning, setisTimerRunning] = useState(false);
  const [breakTime, setBreakTime] = useState(300)
  const [focusTime, setFocusTime] = useState(1500)
  const [focusCount, setFocusCount] = useState(0);
  const [breakCount, setBreakCount] = useState(0);
  const [hidden, setHidden] = useState(true)
  const [paused, setPaused] = useState(true)

  useInterval(
    () => {
      // ToDo: Implement what should happen when the timer is running
      if (focusCount < focusTime) {
        
        setFocusCount((focusCount) => focusCount + 1);
        if(focusCount === (focusTime - 1)){
          new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`).play();
        }
      }
      if(focusCount >= focusTime){
        setBreakCount((breakCount)=> breakCount + 1)
        if(breakCount === (breakTime)){
          new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`).play();
          setFocusCount(0)
          setBreakCount(0)
        }
      }

    },
    isTimerRunning ? 1000 : null
  );


  return (
    <div className="pomodoro">
      <div className="row">
        <div className="col">
         <FocusTime isTimerRunning={isTimerRunning} setFocusTime={setFocusTime} focusTime={focusTime} />
        </div>
        <div className="col">
          <div className="float-right">
            <BreakTime isTimerRunning={isTimerRunning} setBreakTime={setBreakTime} breakTime={breakTime}/>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <StartStop setHidden={setHidden}setPaused={setPaused} isTimerRunning={isTimerRunning} setisTimerRunning={setisTimerRunning} setBreakTime={setBreakTime} setFocusTime={setFocusTime} setFocusCount={setFocusCount}/>
        </div>
      </div>
      <Timer hidden={hidden} paused={paused}isTimerRunning={isTimerRunning} setisTimerRunning={setisTimerRunning} breakTime={breakTime} focusTime={focusTime} focusCount={focusCount} breakCount={breakCount}/>
    </div>
  );
}

export default Pomodoro;

import React from "react";
import { minutesToDuration } from "../utils/duration";
//Unsure why I need to use minutesToDuration/60 instead of secondsToDuration..
// I suppose it doesnt matter though but secondsToDuration listed 3600 seconds as 00:00
function FocusTime({ focusTime, setFocusTime, isTimerRunning }) {
  const handleClick = (input) => {
    if (input === "-") {
      setFocusTime((focusTime) => focusTime - 300);
      if (focusTime <= 300) {
        setFocusTime(300);
      }
    } else {
      setFocusTime((focusTime) => focusTime + 300);
      if (focusTime >= 3600) {
        setFocusTime(3600);
      }
    }
  };
if(isTimerRunning===false){
  return (
    <div className="input-group input-group-lg mb-2">
      <span className="input-group-text" data-testid="duration-focus">
        {/* TODO: Update this text to display the current focus session duration */}
        Focus Duration: {minutesToDuration(focusTime / 60)}
      </span>
      <div className="input-group-append">
        {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
        
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="decrease-focus"
          onClick={() => handleClick("-")}
        >
          <span className="oi oi-minus" />
        </button>
        {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="increase-focus"
          onClick={() => handleClick("+")}
        >
          <span className="oi oi-plus" />
        </button>
      </div>
    </div>
  );
}
if(isTimerRunning===true){
    return (
      <div className="input-group input-group-lg mb-2">
        <span className="input-group-text" data-testid="duration-focus">
          {/* TODO: Update this text to display the current focus session duration */}
          Focus Duration: {minutesToDuration(focusTime / 60)}
        </span>
        <div className="input-group-append">
          {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
          
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="decrease-focus"
            
          >
            <span className="oi oi-minus" />
          </button>
          {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="increase-focus"
            
          >
            <span className="oi oi-plus" />
          </button>
        </div>
      </div>
    );
  }}

export default FocusTime;

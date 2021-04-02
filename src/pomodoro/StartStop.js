import React from "react"
import classNames from "../utils/class-names";
function StartStop({isTimerRunning, setisTimerRunning, setFocusTime, setBreakTime, setFocusCount, setPaused, setHidden }){
    const playPause=()=> {
        setisTimerRunning((prevState) => !prevState);
        setHidden(false)
        setPaused((prevState) => !prevState)
      }
    const stopButton=()=>{
        setisTimerRunning(false)
        setFocusTime(1800)
        setBreakTime(180)
        setFocusCount(0)
        setHidden(true)
        setPaused(true)
    }  

    //Restting the timers to default values when stop is clicked.
    return (<div
        className="btn-group btn-group-lg mb-2"
        role="group"
        aria-label="Timer controls"
      >
        <button
          type="button"
          className="btn btn-primary"
          data-testid="play-pause"
          title="Start or pause timer"
          onClick={playPause}
        >
          <span
            className={classNames({
              oi: true,
              "oi-media-play": !isTimerRunning,
              "oi-media-pause": isTimerRunning,
            })}
          />
        </button>
        {/* TODO: Implement stopping the current focus or break session and disable when there is no active session */}
        <button
          type="button"
          className="btn btn-secondary"
          title="Stop the session"
          onClick={stopButton}
        >
          <span className="oi oi-media-stop" />
        </button>
      </div>)
}

export default StartStop
import React from "react"
import { secondsToDuration } from "../utils/duration";
function Timer ({focusCount, focusTime, breakCount, breakTime, hidden, paused}){
if(hidden===true){return(
 <div>
   </div> 
)}
if(focusCount !== focusTime){
return(
<div>
    {/* TODO: This area should show only when a focus or break session is running or pauses */}
    <div className="row mb-2">
      <div className="col">
        {/* TODO: Update message below to include current session (Focusing or On Break) and total duration */}
        <h2 data-testid="session-title">Focusing for {secondsToDuration(focusTime)} minutes</h2>
        {/* TODO: Update message below to include time remaining in the current session */}
        <p className="lead" data-testid="session-sub-title">
          {secondsToDuration(focusTime-focusCount)} remaining
        </p>
        <h2>{!paused ? "" : "PAUSED"}</h2>
      </div>
    </div>
    <div className="row mb-2">
      <div className="col">
        <div className="progress" style={{ height: "20px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax={`${focusTime}`}
            aria-valuenow={`${focusCount}`}// TODO: Increase aria-valuenow as elapsed time increases
            style={{ width: `${((focusCount / focusTime) * 100)}%` }}  // TODO: Increase width % as elapsed time increases
          />
        </div>
      </div>
    </div>
  </div>
  )
}
if(focusCount === focusTime){
return(
<div>
    {/* TODO: This area should show only when a focus or break session is running or pauses */}
    <div className="row mb-2">
      <div className="col">
        {/* TODO: Update message below to include current session (Focusing or On Break) and total duration */}
        <h2 data-testid="session-title">On Break for {secondsToDuration(breakTime)} minutes</h2>
        {/* TODO: Update message below to include time remaining in the current session */}
        <p className="lead" data-testid="session-sub-title">
          {secondsToDuration(breakTime-breakCount)} remaining
        </p>
        <h2>{!paused ? "" : "PAUSED"}</h2>
      </div>
    </div>
    <div className="row mb-2">
      <div className="col">
        <div className="progress" style={{ height: "20px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax={`${breakTime}`}
            aria-valuenow={`${breakCount}`}// TODO: Increase aria-valuenow as elapsed time increases
            style={{ width: `${((breakCount / breakTime) * 100)}%` }}  // TODO: Increase width % as elapsed time increases
          />
        </div>
      </div>
    </div>
  </div>
  )
}
}

export default Timer
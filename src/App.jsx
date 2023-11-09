import React from "react";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  let state = useSelector((state) => state);

  return (
    <div className="parent">
      <div className="child">
        <div className="state">{state.counter}</div>
        <div className="btns">
          <button className="btn" onClick={(e) => dispatch({ type: "inc" })}>
            Inc
          </button>
          <button className="btn" onClick={(e) => dispatch({ type: "dec" })}>
            Dec
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import { LearnersStyle } from "./learners-style";
const LearnersTodayComponent = () => {
  const [count, setCount] = useState(100);

  return (
    <LearnersStyle>
      <div className="element">
        <div className="element__child">
          <div className="title">Learners Today, Leaders Tomorrow</div>
          <div className="subtitle">
            With our continuous research and development, we provide you with an
            excellent Aptitude training.{count}
          </div>
        </div>
        <button
          className="button__style"
          onClick={() => {
            // setCount(99);
            setCount(count + 1);
          }}
        >
          Register Now
        </button>
      </div>
    </LearnersStyle>
  );
};
export default LearnersTodayComponent;

import React, { useEffect, useState } from "react";
import { LearnersStyle } from "./learners-style";
const LearnersTodayComponent = () => {
  const [count, setCount] = useState(100);
  const [countNumber, setCountNumber] = useState(0);
  useEffect(() => {
    setCountNumber(countNumber + 1);
  }, [count]);
  return (
    <LearnersStyle>
      <div className="element">
        <div className="element__child">
          <div className="title">Learners Today, Leaders Tomorrow</div>
          <div className="subtitle">
            With our continuous research and development, we provide you with an
            excellent Aptitude training.{count}
            count Number{countNumber}
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

import React from "react";
import { LearnersStyle } from "./learners-style";
const LearnersTodayComponent = () => {
  return (
    <LearnersStyle>
      <div className="element">
        <div className="element__child">
          <div className="title">Learners Today, Leaders Tomorrow</div>
          <div className="subtitle">
            With our continuous research and development, we provide you with an
            excellent Aptitude training.
          </div>
        </div>
        <button className="button__style">Register Now</button>
      </div>
    </LearnersStyle>
  );
};
export default LearnersTodayComponent;

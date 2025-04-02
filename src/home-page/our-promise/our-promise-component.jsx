import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faCircleUser,
  faTabletScreenButton,
  faPeopleGroup,
  faDiamondTurnRight,
  faLifeRing,
  faShieldHalved,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { OurpromiseStyle } from "./our-promise-style";
const OurpromisesComponent = () => {
  return (
    <OurpromiseStyle>
      <div>
        <h1 className="title">Our promise</h1>
        <h2 className="sub__title">
          As part of our high quality service, we'd like to offer something
          extra too.
        </h2>
      </div>
      <div className="element">
        <div className="element__item">
          <div className="item">
            <FontAwesomeIcon icon={faLaptopCode} size="2xl" color="#44b2b3" />
            <div className="item__title">Top code quality</div>
          </div>
          <div className="element__content">
            Our commitment goes beyond mere code - it encompasses providing
            solutions. You receive W3C fully compliant markup, without any
            compromise on quality.
          </div>
        </div>

        <div className="element__item">
          <div className="item">
            <FontAwesomeIcon
              icon={faTabletScreenButton}
              size="2xl"
              color="#efaf4b"
            />
            <div className="item__title">Responsive</div>
          </div>
          <div className="element__content">
            We understand the value of a positive attitude, timely
            responsiveness, and adaptability. We're dedicated to attentively
            listening and leveraging our utmost capabilities to serve you.
          </div>
        </div>
        <div className="element__item">
          <div className="item">
            <FontAwesomeIcon icon={faPeopleGroup} size="2xl" color="#00bded" />
            <div className="item__title">Rockstar Team</div>
          </div>
          <div className="element__content">
            Our expertise is our unique selling proposition. You'll have access
            to an all-star team of experienced professionals fully dedicated to
            serving you, armed with coding skills that are truly exceptional
          </div>
        </div>
        <div className="element__item">
          <div className="item">
            <FontAwesomeIcon
              icon={faDiamondTurnRight}
              size="2xl"
              color="#864AF9"
            />
            <div className="item__title">Fast Turn-arounds</div>
          </div>
          <div className="element__content">
            The importance of speed is on par with quality for us. We are swift,
            nimble, and capable of providing high-quality code within a
            timeframe that suits your preferences.
          </div>
        </div>
        <div className="element__item">
          <div className="item">
            <FontAwesomeIcon icon={faLifeRing} size="2xl" color="#fc2947" />
            <div className="item__title">Life-time support</div>
          </div>
          <div className="element__content">
            Our commitment to code quality is exemplified by our enduring
            support. If any bugs happen to emerge in the future, feel free to
            reach out to us for assistance.
          </div>
        </div>
        <div className="element__item">
          <div className="item">
            <FontAwesomeIcon icon={faShieldHalved} size="2xl" color="#32c766" />
            <div className="item__title">Secured Agreement</div>
          </div>
          <div className="element__content">
            The creative work you receive is entirely your own, and we
            unequivocally respect that. We assure you of our commitment and
            readiness to formalize this with a Non-Disclosure Agreement (NDA)
          </div>
        </div>
      </div>
    </OurpromiseStyle>
  );
};
export default OurpromisesComponent;

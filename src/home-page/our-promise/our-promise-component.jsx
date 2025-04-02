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
import { OurPromiseData } from "./our-promise-data";
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
        {OurPromiseData.map((item, index) => {
          return (
            <div className="element__item " style={{ borderTop: item.color }}>
              <div className="item">
                <FontAwesomeIcon
                  icon={item.icon}
                  size="2xl"
                  color={item.colorIcon}
                />
                <div className="item__title">{item.title}</div>
              </div>
              <div className="element__content">{item.description}</div>
            </div>
          );
        })}
      </div>
    </OurpromiseStyle>
  );
};
export default OurpromisesComponent;

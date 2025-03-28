import React from "react";
import { HeroStyle } from "./hero-style";
const HeroPageComponent = () => {
  return (
    <HeroStyle>
      <h1>Aptitude Guru Hem</h1>{" "}
      <h2>
        At AGH, we shape futures and build skills that turn learning into
        success.
      </h2>
      <p>
        Where Success Meets Opportunity! Are you ready to embark on a
        transformative journey towards success? At Aptitude Guru Hem, we are
        committed to providing you with the essential skills and knowledge to
        excel in your professional endeavors. Our expert training in aptitude
        and coding equips you to conquer every challenge, from company interview
        assessments to prestigious coding platforms like
        <span className="span__one">LeetCode</span>,
        <span className="span__two">GeeksForGeeks</span> ,
        <span className="span__one">HackerRank </span>, and more.
      </p>
      <div className="parent">
        <button className="button1">Start your learning</button>
        <button className="button2">Join a live demo</button>
      </div>
    </HeroStyle>
  );
};
export default HeroPageComponent;

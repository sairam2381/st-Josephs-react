import React from "react";
import { useNavigate } from "react-router-dom";
const DummyComponent = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Hello world</h1>
      <button
        onClick={() => {
          navigate("/quiz/user");
        }}
      >
        User Page
      </button>
      <button
        onClick={() => {
          navigate("/quiz/hero-page");
        }}
      >
        Hero Page
      </button>
    </div>
  );
};
export default DummyComponent;

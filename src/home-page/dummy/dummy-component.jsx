import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const DummyComponent = () => {
  const navigate = useNavigate();
  const [name, setName] = useState([
    { name: "xyz", age: 18 },
    { name: "ght", age: 20 },
  ]);
  const [fruits, setFruits] = useState(["Apple", "Mango"]);
  const addFruit = () => {
    setFruits([...fruits, "Banana"]);
  };
  const addName = () => {
    setName([...name, { name: "abc", age: 25 }]);
  };
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

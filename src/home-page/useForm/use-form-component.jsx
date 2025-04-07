import React, { useState } from "react";
import {
  FormContainer,
  Heading,
  InputField,
  SubmitButton,
} from "./use-form-style";
const UseFormComponent = () => {
  const [details, setDetails] = useState({
    name123: "",
    email: "",
    mobile: "",
    address: "",
  });
  //   const obj = { name: "sairam", age: 18 };
  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
    // console.log(e.target.name, ":", e.target.value);
    // obj.name1234 = "manoj";
  };
  return (
    <FormContainer>
      <Heading>User details</Heading>
      <form>
        <InputField
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <InputField
          type="email"
          name="email123"
          placeholder="Enter your email id"
          onChange={handleChange}
          required
        />
        <InputField
          type="number"
          name="mobile"
          placeholder="Enter your mobile number"
          onChange={handleChange}
          required
        />
        <InputField
          type="text"
          name="address"
          placeholder="Enter your address"
          onChange={handleChange}
          required
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </FormContainer>
  );
};
export default UseFormComponent;

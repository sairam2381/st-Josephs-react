import React, { useState } from "react";
import {
  FormContainer,
  Heading,
  InputField,
  SubmitButton,
} from "./use-form-style";
import axios from "axios";
const UseFormComponent = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
  });
  //   const obj = { name: "sairam", age: 18 };
  const handleChange = async (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
    // console.log(e.target.name, ":", e.target.value);
    // obj.name1234 = "manoj";
  };
  const submitForm = async (e) => {
    e.preventDefault();
    console.log("The details:", details);

    const verify = await axios.post(
      "http://localhost:25000/api/v1/user/addData",
      {
        email: details.email,
        mobile: details.mobile,
        address: details.address,
        name: details.name,
      }
    );
    if (verify.data.success == true) {
      alert("Success");
    } else {
      alert("Failure");
    }
  };
  return (
    <FormContainer>
      <Heading>User details</Heading>
      <form onSubmit={submitForm}>
        <InputField
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <InputField
          type="email"
          name="email"
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

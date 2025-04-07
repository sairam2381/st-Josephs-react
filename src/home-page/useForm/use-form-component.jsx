import React, { useState } from "react";
import {
  FormContainer,
  Heading,
  InputField,
  SubmitButton,
} from "./use-form-style";
const UseFormComponent = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
  });
  return (
    <FormContainer>
      <Heading>User details</Heading>
      <form>
        <InputField
          type="text"
          name="name"
          placeholder="Name"
          value=""
          required
        />
        <InputField
          type="email"
          name="email"
          placeholder="Enter your email id"
          value=""
          required
        />
        <InputField
          type="number"
          name="mobile"
          placeholder="Enter your mobile number"
          value=""
          required
        />
        <InputField
          type="text"
          name="address"
          placeholder="Enter your address"
          value=""
          required
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </FormContainer>
  );
};
export default UseFormComponent;

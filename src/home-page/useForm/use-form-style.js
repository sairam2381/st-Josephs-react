import styled from "styled-components";
export const Heading = styled.h1``;
export const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.2s;

  &:focus {
    border-color: #2563eb;
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  resize: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #2563eb;
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  background-color: #2563eb;
  color: white;
  padding: 10px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, transform 0.2s;

  &:hover {
    background-color: #1e40af;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #1c3faa;
    transform: translateY(0);
  }
`;

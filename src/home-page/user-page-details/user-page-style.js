import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  text-align: center;
  color: #333;
`;

export const UserList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const UserCard = styled.li`
  background: #fff;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
`;

export const UserName = styled.h3`
  margin: 0;
  color: #007bff;
`;

export const UserInfo = styled.p`
  margin: 5px 0;
  color: #555;
`;

export const ErrorText = styled.h2`
  color: red;
  text-align: center;
  font-size: 18px;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  border: 5px solid #f3f3f3;
  border-top: 5px solid #007bff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
  margin: 50px auto;
`;
export const ButtonStyle = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

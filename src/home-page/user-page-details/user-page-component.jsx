import React, { useEffect, useState } from "react";
import {
  Container,
  UserCard,
  UserInfo,
  UserList,
  UserName,
} from "./user-page-style";
const UserPageComponent = () => {
  const [userDetails, setUserDetails] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
          //   "https://jsonplaceholder.typicode.com/todos/1"
        );
        const ans = await response.json();
        console.log("Checked:", ans);

        setUserDetails(ans);
      } catch (e) {
        console.log("The error is", e);
      }
    };
    fetchData();
  }, []);
  console.log("The user details is:", userDetails);

  return (
    <Container>
      <h1>Users</h1>
      <UserList>
        {userDetails.map((item, index) => {
          return (
            <UserCard key={index}>
              <UserName>{item.name}</UserName>
              <UserInfo>Email:{item.email}</UserInfo>
              <UserInfo>Mobile: {item.phone}</UserInfo>
            </UserCard>
          );
        })}
      </UserList>
    </Container>
  );
};
export default UserPageComponent;

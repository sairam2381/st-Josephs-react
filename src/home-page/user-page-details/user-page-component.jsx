import React, { useEffect, useState } from "react";
import {
  Container,
  UserCard,
  UserInfo,
  UserList,
  UserName,
} from "./user-page-style";
const UserPageComponent = () => {
  const [isLoaded, setLoaded] = useState(false);
  const [userDetails, setUserDetails] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
          //   "https://jsonplaceholder.typicode.com/todos/1"
        );
        const ans = await response.json();
        console.log("Checked:", ans.completed);
        if (ans.completed === false) {
          setLoaded(true);
        } else {
          setUserDetails(ans);
        }
      } catch (e) {
        setLoaded(true);
        console.log("The error is", e);
      }
    };
    fetchData();
  }, []);
  console.log("The user details is:", userDetails);

  return (
    <Container>
      {isLoaded === true ? (
        <h1>No data found</h1>
      ) : (
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
      )}
    </Container>
  );
};
export default UserPageComponent;

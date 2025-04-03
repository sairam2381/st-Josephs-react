import React, { useEffect, useState } from "react";
import {
  ButtonStyle,
  Container,
  UserCard,
  UserInfo,
  UserList,
  UserName,
} from "./user-page-style";
const UserPageComponent = () => {
  const [isLoaded, setLoaded] = useState(false);
  const [userDetails, setUserDetails] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${page}`
          //   "https://jsonplaceholder.typicode.com/todos/1"
        );
        let ans = await response.json();
        ans = Array.isArray(ans) ? ans : [ans];
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
  }, [page]);
  console.log("The user details is:", userDetails);

  return (
    <Container>
      {isLoaded === true ? (
        <h1>No data found</h1>
      ) : (
        <UserList>
          {userDetails?.map((item, index) => {
            return (
              <UserCard key={index}>
                <UserName>{item?.name}</UserName>
                <UserInfo>Email:{item?.email}</UserInfo>
                <UserInfo>Mobile: {item?.phone}</UserInfo>
              </UserCard>
            );
          })}
          <ButtonStyle>
            <button
              onClick={() => {
                setPage(page + 1);
              }}
            >
              Next
            </button>
            <button
              onClick={() => {
                setPage(page - 1);
              }}
            >
              Prev
            </button>
          </ButtonStyle>
        </UserList>
      )}
    </Container>
  );
};
export default UserPageComponent;

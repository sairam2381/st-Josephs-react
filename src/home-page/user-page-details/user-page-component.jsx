import React, { useEffect, useState } from "react";
import {
  ButtonStyle,
  Container,
  UserCard,
  UserInfo,
  UserList,
  UserName,
} from "./user-page-style";
import axios from "axios";
const UserPageComponent = () => {
  const [isLoaded, setLoaded] = useState(false);
  const [userDetails, setUserDetails] = useState([]);
  const [page, setPage] = useState(1);
  const pageChange = (direction) => {
    if (direction == -1) {
      if (page == 1) {
        alert("Your are exceeding the point");
        return;
      }
      setPage(page - 1);
    } else {
      //
      if (page == 10) {
        alert("Your are exceeding the point");
        return;
      }
      setPage(page + 1);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:25000/api/v1/user/getName",
          {
            withCredentials: true,
            rejectUnauthorized: false,
          }
        );
        console.log("The response:", response.data);

        // const ans = Array.isArray(response.data)
        //   ? response.data
        //   : [response.data];
        // console.log("Checked:", ans[0]?.completed);

        // if (ans[0]?.completed === false) {
        //   setLoaded(true);
        // } else {
        //   setUserDetails(ans);
        // }
        if (response.data.success === true) {
          setUserDetails(response.data.data123);
        } else {
          setLoaded(true);
        }
      } catch (e) {
        setLoaded(true);
        console.log("The error is", e);
      }
    };

    fetchData();
  }, [page, setUserDetails]);

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
                <UserInfo>Mobile: {item?.age}</UserInfo>
              </UserCard>
            );
          })}
          <ButtonStyle>
            <button
              onClick={() => {
                pageChange(1);
              }}
            >
              Next
            </button>
            <button
              onClick={() => {
                pageChange(-1);
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

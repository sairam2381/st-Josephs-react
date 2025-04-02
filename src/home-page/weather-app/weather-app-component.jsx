import React, { useState, useEffect } from "react";
import {
  Container,
  ErrorText,
  Loader,
  Title,
  UserCard,
  UserInfo,
  UserList,
  UserName,
} from "./weather-app-style";

function WeatherAppComponent() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) throw new Error("Failed to fetch data");
        let data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  //   useEffect(() => {
  //     const fetchUsers = async () => {
  //       try {
  //         let { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
  //         setUsers(data);
  //       } catch (err) {
  //         setError(err.message);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     fetchUsers();
  //   }, []);
  //   fetch("https://randomuser.me/api/?results=10")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data.results))
  //     .catch((error) => console.error("Error fetching data:", error));
  if (loading) return <Loader />;
  if (error) return <ErrorText>{error}</ErrorText>;

  return (
    <Container>
      <Title>Users List</Title>
      <UserList>
        {users.map((user) => (
          <UserCard key={user.id}>
            <UserName>{user.name}</UserName>
            <UserInfo>Email: {user.email}</UserInfo>
            <UserInfo>Phone: {user.phone}</UserInfo>
          </UserCard>
        ))}
      </UserList>
    </Container>
  );
}
export default WeatherAppComponent;

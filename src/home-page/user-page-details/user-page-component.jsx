import React, { useEffect, useState } from "react";
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

  return <h1>Hello world</h1>;
};
export default UserPageComponent;

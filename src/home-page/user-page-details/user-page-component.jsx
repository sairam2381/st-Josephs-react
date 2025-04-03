import React, { useEffect, useState } from "react";
const UserPageComponent = () => {
  const [userDetails, setUserDetails] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const ans = await response.json();
      console.log("Answer:", ans);
    };
    fetchData();
  }, []);
  return <h1>Hello world</h1>;
};
export default UserPageComponent;

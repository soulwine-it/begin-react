import React, { userRef } from "react";
import Hello from "./Hello.js";
import "./App.css";
import Wrapper from "./Wrapper.js";
import Counter from "./Counter.js";
import InputSample from "./InputSample.js";
import UserList from "./UserList.js";

function App() {
  const users = [
    {
      id: 1,
      username: "sh",
      email: "sh@gmail.com"
    },
    {
      id: 2,
      username: "js",
      email: "js@mgail.com"
    },
    {
      id: 3,
      username: "hs",
      email: "hs@gmail.com"
    }
  ];

  const nextId = userRef(4);
  const onCreate = () => {
    console.log(nextId.current);
    nextId.current += 1;
  };
  return <UserList users={users} />;
}
export default App;

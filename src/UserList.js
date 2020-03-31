import React from "react";

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList() {
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

  return (
    <div>
      {users.map((user, index) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;

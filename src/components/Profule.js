import React from "react";
import { useUser } from "reactfire";
function Profule() {
  const { data: user } = useUser();
  console.log(user);

  return (
    <div>
      <h1>Hello {user.email}</h1>
    </div>
  );
}

export default Profule;

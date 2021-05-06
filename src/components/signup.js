import React, { useState } from "react";
import { useAuth } from "reactfire";
function SignUp() {
  const auth = useAuth();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  function checkPassword() {
    if (password === confirmPassword) return true;
    else return false;
  }
  async function onSubmit(email, password) {
    console.log(email, "user", password);
    await auth.createUserWithEmailAndPassword(email, password);
  }

  return (
    <form>
      <h3>Sign Up</h3>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={(e) => {
            e.preventDefault();
            setEmail(e.target.value);
          }}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => {
            e.preventDefault();
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label>Confirm Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => {
            e.preventDefault();
            setConfirmPassword(e.target.value);
          }}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-block"
        onClick={(e) => {
          e.preventDefault();
          if (checkPassword()) onSubmit(email, password);
        }}
      >
        Sign Up
      </button>
      <p className="forgot-password text-right">
        Already registered <a href="./sign-in">sign in?</a>
      </p>
    </form>
  );
}

export default SignUp;

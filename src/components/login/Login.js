import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "reactfire";
function Login() {
  const auth = useAuth();
  let history = useHistory();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  async function onSubmit(email, password) {
    await auth.signInWithEmailAndPassword(email, password).then(() => {
      history.push("./profile");
    });
  }
  return (
    <form>
      <h3>Sign In</h3>

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
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-block"
        onClick={(e) => {
          e.preventDefault();
          onSubmit(email, password);
        }}
      >
        Submit
      </button>
      <p className="forgot-password text-right">
        Forgot <a href="./Reset">password?</a>
      </p>
    </form>
  );
}

export default Login;

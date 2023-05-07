import React, { useState } from "react";
import {
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useAuth } from "../../hooks/useAuth";
import Icon from "../../common/Icon";

const Login = ({ callback }) => {
  const [cred, setCred] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { signin } = useAuth();

  const handleChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };

  const handleSignIn = async () => {
    try {
      await signin(cred.email, cred.password);
      setError("");
    } catch (err) {
      console.log(err.message);
      setError(err.response.data);
    }
  };
  return (
    <>
      <div className="text-center mb-3">
        <p>Sign in with:</p>
      </div>

      <MDBInput
        wrapperClass="mb-4"
        label="Email address"
        name="email"
        id="form1"
        type="email"
        onChange={handleChange}
      />
      <MDBInput
        wrapperClass="mb-4"
        name="password"
        label="Password"
        id="form2"
        type="password"
        onChange={handleChange}
      />

      <div className="d-flex justify-content-between mx-4 mb-4">
        <MDBCheckbox
          name="flexCheck"
          value=""
          id="flexCheckDefault"
          label="Remember me"
        />
        <a href="!#">Forgot password?</a>
      </div>

      <MDBBtn className="mb-4 w-100" onClick={handleSignIn}>
        Sign in
      </MDBBtn>
      <p className="text-center">
        Not a member?{" "}
        <a onClick={() => callback("register")} href="#!">
          Register
        </a>
      </p>
      <p>{error}</p>
    </>
  );
};

export default Login;

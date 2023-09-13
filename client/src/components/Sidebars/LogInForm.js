import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import EmailPassword from "./EmailPassword";

function LogInForm({ setShowSignUp }) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const submitLoginHandler = (e) => {
    e.preventDefault();
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

  return (
    <>
      <Form
        className="w-10/12"
        autoComplete="off"
        onSubmit={submitLoginHandler}
      >
        <EmailPassword
          email={loginEmail}
          setEmail={setLoginEmail}
          password={loginPassword}
          setPassword={setLoginPassword}
        />
        <Button
          variant="primary"
          type="submit"
          className="w-100 button-primary mt-4"
        >
          Login
        </Button>
        <p>
          By continuing, you agree to RYD's Conditions of Use and Privacy
          Notice.
        </p>
        <div className="text-center mt-4">
          <div className="d-flex justify-content-center align-items-center">
            <hr className="flex-grow-1" />
            <p className="mx-2 mb-0">
              <b>Don't have an account?</b>
            </p>
            <hr className="flex-grow-1" />
          </div>
          <Button
            variant="secondary"
            type="submit"
            className="w-100 mt-2"
            onClick={handleSignUpClick}
          >
            Sign Up
          </Button>
        </div>
      </Form>
    </>
  );
}

export default LogInForm;

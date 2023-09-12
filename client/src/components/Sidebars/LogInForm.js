import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import EmailPassword from "./EmailPassword";

function LogInForm() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    
    const submitLoginHandler = (e) => {
        e.preventDefault();
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
      </Form>
    </>
  );
}

export default LogInForm;

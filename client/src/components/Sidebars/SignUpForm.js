import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import EmailPassword from "./EmailPassword";

function SignUpForm({ setShowSignUp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const submitSignupHandler = (e) => {
    e.preventDefault();
    // Add your signup logic here, including sending the profilePic to the server if needed
  };

  const handleSignInClick = () => {
    setShowSignUp(false);
  };

  return (
    <>
      <Form
        className="w-10/12"
        autoComplete="off"
        onSubmit={submitSignupHandler}
      >
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
            autoFocus
            required
            className="input-primary"
          />
        </Form.Group>
        <Form.Group controlId="Number">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="tel"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            autoComplete="off"
            autoFocus
            required
            className="input-primary"
          />
        </Form.Group>
        <EmailPassword
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
        <Button
          variant="primary"
          type="submit"
          className="w-100 button-primary mt-4"
        >
          Sign Up
        </Button>
        <p>
          By creating an account, you agree to RYD's Conditions of Use and
          Privacy Notice.
        </p>
        <div className="text-center mt-4">
          <div className="d-flex justify-content-center align-items-center">
            <hr className="flex-grow-1" />
            <p className="mx-2 mb-0">
              <b>Already have an account?</b>
            </p>
            <hr className="flex-grow-1" />
          </div>
          <Button
            variant="secondary"
            type="submit"
            className="w-100 mt-2"
            onClick={handleSignInClick}
          >
            Sign In
          </Button>
        </div>
      </Form>
    </>
  );
}

export default SignUpForm;

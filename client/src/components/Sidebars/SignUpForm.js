import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import EmailPassword from "./EmailPassword";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [number, setNumer] = useState("");

  const submitSignupHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Form className="w-10/12" autoComplete="off" onSubmit={submitSignupHandler}>
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
            onChange={(e) => setNumer(e.target.value)}
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
      </Form>
    </>
  );
}

export default SignUpForm;

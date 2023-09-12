import React from 'react'
import { Form } from "react-bootstrap";

function EmailPassword({ email, setEmail, password, setPassword }) {
 console.log("email", email);
 console.log("password", password);

  return (
   <>
    <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="off"
                      autoFocus
                      required
                      className="input-primary"
                    />
                  </Form.Group>
                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="off"
                      required
                      className="input-primary"
                    />
                  </Form.Group>
   </>
  )
}

export default EmailPassword
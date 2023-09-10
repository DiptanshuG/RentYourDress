import React, { useState, } from "react";
import { Button, Form } from "react-bootstrap";
import "../../styles/Login.css"; // Import your custom CSS file
import "../../styles/LoginSlideIn.css"; // Import your custom CSS file
import log from "../../assets/images/logo2.png";

const Login = ({ isOpen, onClose }) => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");





    const submitHandler = (e) => {
        e.preventDefault();
    };



    return (
        <div className={`login-container ${isOpen ? "open" : ""}`}>
            <div className="login-form">
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/3">
                        <div className="flex flex-col justify-center items-center h-screen">
                            <img
                                src={log}
                                width="50"
                                height="50"
                                className="d-inline-block logo-img align-top"
                                alt="Your Logo"
                                style={{
                                    backgroundColor: "#cb9a9a", // Set background color
                                    clipPath: "polygon(0 0, 100% 0, 100% 75%, 0 100%)", // Add a custom shape
                                    zIndex: -1 // Set z-index property
                                }}
                            />
                            <h1 className="text-2xl textColor font-bold mb-1">Welcome</h1>
                            <p className="font-bold mb-4 mutedColor">
                                Discover the perfect attire to make every moment memorable.
                            </p>

                            <Form className="w-10/12" autoComplete="off" onSubmit={submitHandler}>
                                <Form.Group controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
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
                                        placeholder="Enter password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        autoComplete="off"
                                        required
                                        className="input-primary"

                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="w-100 button-primary mt-4">
                                    Login
                                </Button>

                            </Form>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Login;

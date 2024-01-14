import React from "react";
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useFirebase } from '../Context/Firebase'

const LogInUser = () => {
    const firebase = useFirebase();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (firebase.isLoggedIn){
            navigate("/")
        }
    }, [firebase, navigate ])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Loging in with User")
        await firebase.LogInWithEmailAPassword(email, password);
        console.log("Success");
    };

    return (
        <div className="container mt-5">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login 
                </Button>
            </Form>

            <div className="other mt-5 mb-5">
                OR 
            </div>
                <Button variant="danger" onClick={firebase.signInWithGoogle}>SignIn With Google</Button>
        </div>
    )
}
export default LogInUser;
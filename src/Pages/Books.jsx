import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useFirebase} from '../Context/Firebase'
const BookListing = () => {

    const firebase = useFirebase();

    const [name, setName] = useState("");
    const [ISBN, setISBN] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
       await firebase.handleNewListing(name, ISBN, price, image);
    }
    return(

        <div className="container mt-5">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Book Name</Form.Label>
                    <Form.Control
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        type="text" placeholder="Enter Book Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Book Price</Form.Label>
                    <Form.Control
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        type="text" placeholder="Enter Book Price" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Enter ISBN Number</Form.Label>
                    <Form.Control
                        onChange={(e) => setISBN(e.target.value)}
                        value={ISBN}
                        type="text" placeholder="ISBN Number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Upload Book Image</Form.Label>
                    <Form.Control
                        onChange={(e) => setImage(e.target.files[0])}
                        type="file" placeholder="Upload Book Image" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Upload BOOK
                </Button>
            </Form>
        </div>
    )
}

export default BookListing;
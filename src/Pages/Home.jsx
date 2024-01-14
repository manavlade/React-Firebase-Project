import React from "react";
import { useEffect, useState } from "react";
import {useFirebase} from '../Context/Firebase';
import Bookcard from "../Components/Books";

const Home = () => {

    const firebase = useFirebase();

    const [books, setBooks] = useState();

    useEffect(() => {
        // firebase.listAllBooks().then((books) => setBooks(books.docs));
        firebase.listAllBooks().then((docs) => console.log(docs))
    }, [])

    return <div className="container">
        {/* books.map(book => <li> {book.data().name} </li>) */}
        <Bookcard/>
        {/* <Bookcard  {...book.data()} /> */}
    </div>
}

export default Home;

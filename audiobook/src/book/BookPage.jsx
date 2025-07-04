import styles from "./BookPage.module.css";
import Book from "./single_book/Book.jsx";
import React, {useEffect, useState} from 'react';

function useLibraryGenerator(){
    const [library, setLibrary] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/library')
        .then(res => res.json())
        .then(data => {
            setLibrary(data);
            console.log("Fetched data: ", data);

        })
    }, []);

    return library;
}


function BookPage (){

    const library = useLibraryGenerator(); //generates the array of books

    return (
        <>
            <div className={styles.Title}>
                <h1 className={styles.pageTit}>Library: A Journey Through Middle-Earth in Audiobook Form</h1>
                <div className={styles.Books}>
                    {library.map(book => <Book key={book.title} title={book.title}></Book>)}
                </div>
            </div>
        </>
    );
}

export default BookPage;
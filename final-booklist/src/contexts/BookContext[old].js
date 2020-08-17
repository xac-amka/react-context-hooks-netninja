import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {id: 1, title: 'Song of Fire: Vol 1', author: 'James'},
        {id: 2, title: 'Song of Fire: Vol 2', author: 'James'}
    ]);
    const addBook = (title, author) => {
        setBooks([...books, {title, author, id: uuidv4() }])
    }
    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id));
    }
    return (
        <BookContext.Provider value={{ books, addBook, removeBook }}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;
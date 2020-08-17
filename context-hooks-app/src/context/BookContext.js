import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {id: uuidv4(), title: 'Song of Fire - Vol 1'},
        {id: 2, title: 'Song of Fire - Vol 2'},
        {id: 3, title: 'Song of Fire - Vol 3'},
        {id: 4, title: 'Song of Fire - Vol 4'},
    ]);
    return (
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;
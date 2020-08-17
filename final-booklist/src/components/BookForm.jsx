import React, { useContext, useState} from 'react';
import { BookContext } from '../contexts/BookContext';
import { ADD_BOOK } from '../actions/actionTypes';

const BookForm = () => {
    const [ title, setTitle ] = useState('');
    const [ author, setAuthor ] = useState('');
    const { dispatch } = useContext(BookContext);
    // const { addBook } = useContext(BookContext);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: ADD_BOOK, book: {
            title, author
        } });
        // addBook(title, author);

        setAuthor('');
        setTitle('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Book title" value={title} onChange={e => setTitle(e.target.value)} required />
            <input type="text" placeholder="Author name" value={author} onChange={e => setAuthor(e.target.value)} required />
            <input type="submit" value="ADD" />
        </form>
    )
}

export default BookForm;
import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';
// Second way to using Context inside component
class BookList extends Component {
    static contextType = ThemeContext;
    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
                <ul>
                    <li style={{ background: theme.ui }}>Harry potter volume 1</li>
                    <li style={{ background: theme.ui }}>Harry potter volume 2</li>
                    <li style={{ background: theme.ui }}>Harry potter volume 3</li>
                </ul>
            </div>
        )
    }
}

export default BookList;

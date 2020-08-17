import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';
// First way to using Context inside component
// BENEFIT:
// We can use this approach in both class component and function component
// We can use it multiple context, consuming multiple context
class Navbar extends Component {
    render() {
      return (
        <AuthContext>{authContext => (
          <ThemeContext.Consumer>{themeContext => {
            const { isAuthenticated, toggleAuth } = authContext;
            const { isLightTheme, light, dark } = themeContext;
            const theme = isLightTheme ? light : dark;
            return (
              <nav style={{ background: theme.ui, color: theme.syntax }}>
                <h1>Context App</h1>
                <div onClick={() => toggleAuth()}>
                  { isAuthenticated ? 'Logged in' : 'Logged out' }
                </div>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </nav>
            )
          }}</ThemeContext.Consumer>
        )}</AuthContext>
      );
    }
  }
export default Navbar;

// user context + Alert + ScrollButton
import React from 'react';

const UserContext = React.createContext();

function getUserFromLocalStorage() {
  return localStorage.getItem('user')
    ? // if there is a user
      JSON.parse(localStorage.getItem('user'))
    : // else
      { username: null, token: null };
}

function UserProvider({ children }) {
  // const [user, setUser] = React.useState({ username: null, token: null });
  const [user, setUser] = React.useState(getUserFromLocalStorage());
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      setHeight(window.pageYOffset);
    });
    // cleanup function
    return () => window.removeEventListener('scroll', () => {});
  });
  // LOGIN
  const userLogin = (user) => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };
  // LOGOUT
  const userLogout = () => {
    setUser({ username: null, token: null });
    localStorage.removeItem('user');
  };
  // ALERT
  const [alert, setAlert] = React.useState({
    show: false,
    msg: '',
    type: 'success',
  });
  // type es6 default parameter
  const showAlert = ({ msg, type = 'success' }) => {
    setAlert({ show: true, msg, type });
  };
  const hideAlert = () => {
    setAlert({ ...alert, show: false });
  };

  return (
    // pass value and use wherever you like with React.useContext.
    <UserContext.Provider
      value={{
        user,
        userLogin,
        userLogout,
        alert,
        showAlert,
        hideAlert,
        height,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };

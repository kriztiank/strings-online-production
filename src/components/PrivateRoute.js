import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../context/user';

// get the children of the PrivateRoute
export default function PrivateRoute({ children }) {
  const { user } = React.useContext(UserContext);

  return (
    <Route
      render={() => {
        // restrict access to checkout and orders page
        // if the token/user is there show children of the PrivateRoute, if not redirect to login page
        return user.token ? children : <Redirect to='/login'></Redirect>;
      }}
    ></Route>
  );
}

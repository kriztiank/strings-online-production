import React from 'react';
// react router dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// apollo client
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
// components
import Mobile from './components/Navigation/Mobile';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Alert from './components/Alert';
// pages
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Error from './pages/Error';
import Home from './pages/Home';
import Terms from './pages/Terms/Terms';
import Login from './pages/Login';
// products
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
// productgroups
import Elguitar from './pages/Productgroups/Elguitar';
import Westernguitar from './pages/Productgroups/Westernguitar';
import Elbass from './pages/Productgroups/Elbass';
import Acousticbass from './pages/Productgroups/Acousticbass';
// order history, private route
import Orders from './pages/Orders';
// private route
import PrivateRoute from './components/PrivateRoute';
//Styles
import './css/media-queries.scss';
// apollo client
const client = new ApolloClient({
  uri: 'https://strings-online.netlify.app/',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <section className='mobileMenu'>
          <Mobile pageWrapId={'page-wrap'} outerContainerId={'App'} />
        </section>
        <Header />
        <Alert />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/terms'>
            <Terms />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          {/* PRIVATE ROUTE */}
          <PrivateRoute path='/checkout'>
            <Checkout />
          </PrivateRoute>
          {/* PRODUCTS */}
          <Route exact path='/products'>
            <Products />
          </Route>
          <Route path='/products/:id' children={<ProductDetails />}></Route>
          {/* PRODUCTGROUPS */}
          <Route exact path='/elguitar'>
            <Elguitar />
          </Route>
          <Route exact path='/westernguitar'>
            <Westernguitar />
          </Route>
          <Route exact path='/elbass'>
            <Elbass />
          </Route>
          <Route exact path='/akubass'>
            <Acousticbass />
          </Route>
          {/* PRIVATE ROUTE */}
          <PrivateRoute exact path='/orders'>
            <Orders />
          </PrivateRoute>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;

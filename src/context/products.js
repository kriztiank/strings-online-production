// products context, React.createContext, Provider, React.useContext
import React from 'react';
import axios from 'axios';
import url from '../utils/URL';
import { featuredProducts, paginate } from '../utils/helpers';

// import as a named import and use wherever you like with React.useContext.
// in this case pages > Products.js and pages > Brands.js
export const ProductContext = React.createContext();

// in index.js import ProductProvider and wrap it around App component.
export default function ProductProvider({ children }) {
  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [featured, setFeatured] = React.useState([]);
  // state values for sorted/paginated pages and filters
  const [sorted, setSorted] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [filters, setFilters] = React.useState({
    search: '',
    category: 'all',
    shipping: false,
    price: 'all',
  });
  // FETCH PRODUCTS
  React.useEffect(() => {
    setLoading(true);
    axios.get(`${url}/products`).then((response) => {
      // pass in featuredProducts function
      const featured = featuredProducts(response.data);
      // invoke paginate function and pass in products
      setSorted(paginate(products));
      // invoke all functions
      setProducts(response.data);
      setFeatured(featured);
      setLoading(false);
    });
    // cleanup function
    return () => {};
    // eslint-disable-next-line
  }, []);

  const changePage = index => {
    setPage(index);
  };

 // FILTER PRODUCTS
  // This useEffect will only run if the filters or products state value changes
  React.useEffect(() => {
    // default values sort price ascending, setPage(0);
    let newProducts = [...products].sort((a, b) => a.price - b.price);
    const { search, category, shipping, price } = filters;
    // FILTER BY CATEGORY
    if (category !== "all") {
      newProducts = newProducts.filter(item => item.category === category);
    }
    // FILTER BY SHIPPING, true/false
    if (shipping !== false) {
      newProducts = newProducts.filter(item => item.free_shipping === shipping);
    }
    // FILTER BY SEARCH INPUT
    if (search !== "") {
      newProducts = newProducts.filter(item => {
        let title = item.title.toLowerCase().trim();
        // if title match the search input
        return title.startsWith(search) ? item : null;
      });
    }
    // FILTER BY PRICE
    if (price !== "all") {
      newProducts = newProducts.filter(item => {
        if (price === 0) {
          return item.price < 300;
        } else if (price === 300) {
          return item.price > 300 && item.price < 650;
        } else {
          return item.price > 650;
        }
      });
    }

    setPage(0);
    setSorted(paginate(newProducts));
  }, [filters, products]);

  const updateFilters = e => {
    // text, select, checkbox, radio input type/elements
    const type = e.target.type;
    // name of the type, search, category, shipping, price
    const filter = e.target.name;
    // the input value
    const value = e.target.value;
    let filterValue;
    if (type === "checkbox") {
      filterValue = e.target.checked;
    } else if (type === "radio") {
      // if filter is all do nothing else parseInt
      value === "all" ? (filterValue = value) : (filterValue = parseInt(value));
    } else {
      filterValue = value;
    }
    // copy all properties from the filters state/object, and overwrite single values e.target.name;
    setFilters({ ...filters, [filter]: filterValue });
  };

  return (
    // pass values to pages/Products.js as an object
    <ProductContext.Provider
      value={{
        products,
        loading,
        featured,
        sorted,
        page,
        changePage,
        filters,
        updateFilters,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

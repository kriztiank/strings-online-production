import React from "react";
// access data from context.
import { ProductContext } from "../context/products";
import Loading from "../components/Loading";
import Filters from "../components/Products/Filters";
import PaginateProducts from "../components/Products/PaginateProducts";

export default function Products() {
  // destructure data from context
  const { loading } = React.useContext(ProductContext);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Filters />
      <PaginateProducts />
    </>
  );
}

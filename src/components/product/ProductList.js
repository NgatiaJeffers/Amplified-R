import React from "react";
import Product from "./Product";
import { products } from "../../data/seed";

// Parent component

class ProductList extends React.Component {
    render() {
        return (
            <div className="content-center divide-y divide-slate-100">
                <h1 className="font-bold text-center text-3xl text-lime-500 m-5">Popular Products</h1>
                <Product products={products} />
            </div>
        )
    }
}

export default ProductList; // Don't forget to use export default
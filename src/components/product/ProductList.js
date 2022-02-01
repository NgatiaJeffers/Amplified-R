import React from "react";
import Product from "./Product";
import { products } from "../../data/seed";

// Parent component

class ProductList extends React.Component {
    handleProductupVote(products) {
        console.log(productsId + ' was upvoted');
    }

    render() {
        return (
            <div className="content-center divide-y divide-slate-200">
                <h1 className="font-bold text-center text-3xl text-lime-500 m-5">Popular Products</h1>
                <Product products={products} handleProductUpVote />
            </div>
        )
    }
}

export default ProductList; // Don't forget to use export default
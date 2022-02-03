import React from "react";
import Product from "./Product";
import { products } from "../../data/seed";

// Parent component

class ProductList extends React.Component {
    handleProductUpVote = (productId) => {
        const nextProducts = this.state.products.map((product) => {
            if (product.id === productId) {
                return Object.assign({}, product, {
                    votes: product.votes++,
                });
            } else {
                return product;
            }
        });
        this.setState({
            products: nextProducts,
        });
        console.log(productId + ' was upvoted.')
    };

    render() {
        return (
            <div className="content-center divide-y divide-slate-200">
                <h1 className="font-bold text-center text-3xl text-lime-500 m-5">Popular Products</h1>
                <Product products={products} onVote={this.handleProductUpVote} />
            </div>
        )
    }
}

export default ProductList; // Don't forget to use export default
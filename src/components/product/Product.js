import React from "react";

import cole from '../../img/j-cole.jpg'

// Child component
class Product extends React.Component {
    constructor(props) {
        super(props);   // always call this first

        // custom method bindings here
        this.state = { products: 0 };
        this.handleUpVote = this.handleUpVote.bind(this);
    };

    handleUpVote = () => {
        this.props.handleProductUpVote(this.props.id);
    };

    componentDidMount() {
        this.setState({ products: [] })
    };


    render() {
        let {
            products,
            onVote
        } = this.props;

        return (
            <div className="divide-y divide-slate-100">
                {products?.sort((a, b) => (b.votes - a.votes)).map(item => {
                    return (
                        <article key={item.id} className="flex items-start space-x-6 p-6">
                            <img src={cole} alt="J cole" width="60" height="88" className="flex-none rounded-md bg-slate-100" />
                            <div className="min-w-0 relative flex-auto">
                                <h2 className="font-semibold text-slate-900 truncate pr-20">
                                    <a href='#'>{item.title}</a>
                                </h2>
                                <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
                                    <div className="ml-2">
                                        <dt className="sr-only">Year</dt>
                                        <dd className="w-64 bg-lime-200 truncate">{item.description}</dd>
                                    </div>
                                    <div>
                                        <dd className="flex items-center cursor-pointer" onClick={onVote}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </dd>
                                    </div>
                                    <div>
                                        <dt className="sr-only">Runtime</dt>
                                        <dd className="flex items-center">
                                            <svg width="2" height="2" fill="currentColor" className="mx-2 text-slate-300" aria-hidden="true">
                                                <circle cx="1" cy="1" r="1" />
                                            </svg>
                                            {item.votes}
                                        </dd>
                                    </div>
                                    <div className="flex-none w-full mt-2 font-normal">
                                        <dt className="sr-only">Cast</dt>
                                        <dd className="text-slate-400">Submitted by: {item.submitterAvatarUrl}</dd>
                                    </div>
                                </dl>
                            </div>
                        </article>
                    )
                })}

            </div>


        );
    }
}

export default Product;
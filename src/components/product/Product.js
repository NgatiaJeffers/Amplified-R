import React from "react";

import cole from '../../img/j-cole.jpg'

// Child component
class Product extends React.Component {
    render() {
        let { products } = this.props

        return (
            <div className="">
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
                                        <dd className="w-64 bg-gray-200 truncate">{item.description}</dd>
                                    </div>
                                    <div>
                                        <dt className="sr-only">Genre</dt>
                                        <dd className="flex items-center">
                                            <svg width="2" height="2" fill="currentColor" className="mx-2 text-slate-300" aria-hidden="true">
                                                <circle cx="1" cy="1" r="1" />
                                            </svg>
                                            Horror
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
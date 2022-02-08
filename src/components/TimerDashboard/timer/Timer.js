import React from "react";

import "../../../js/helpers";

class Timer extends React.Component {
    render() {
        const elapsedString = window.helpers.renderElapsedString(this.props.elapsed)

        return (
            <div className="container flex justify-center">
                <div className="block w-80 text-center m-4 p-6 rounded-lg shadow-lg bg-white max-w-sm">
                    <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{this.props.title}</h5>
                    <p className="text-gray-700 text-base mb-4">
                        {this.props.project}
                    </p>
                    <h2 className="text-gray-700 text-center text-base mb-4">
                        {elapsedString}
                    </h2>
                    <div className="flex justify-center h-4 mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 float-right" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                            <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                        </svg>

                        <svg
                            onClick={this.props.onEditClick}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 float-left"
                            viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white
                        font-medium text-xs leading-tight uppercase rounded shadow-md
                        hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg
                        focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg
                        transition duration-150 ease-in-out">
                        Start
                    </button>
                </div>
            </div>
        );
    }
}

export default Timer;
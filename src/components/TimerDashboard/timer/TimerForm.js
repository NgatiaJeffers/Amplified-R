import React from "react";

class TimerForm extends React.Component {
    state = {
        title: this.props.title || '',
        project: this.props.project || '',
    };

    handleTitleChange = (e) => {
        this.setState({ title: e.target.value });
    };

    hanldeProjectChange = (e) => {
        this.setState({ project: e.target.value });
    };

    handleSubmit = () => {
        this.props.onFormClose({
            id: this.props.id,
            title: this.state.title,
            project: this.state.project,
        });
    };

    render() {
        const submitText = this.props.id ? 'Update' : 'Create';
        return (
            <div className="">
                <div className="max-w-sm rounded-lg mx-auto bg-white shadow-lg mt-8 mb-8 pt-6 pb-5 px-6">
                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                        Title
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            value={this.state.title}
                            onChange={this.handleTitleChange}
                            className="mt-1 px-3 py-2 bg-white border shadow-sm
                                    border-slate-300 placeholder-slate-400
                                    focus:outline-none focus:border-sky-500
                                    focus:ring-sky-500 block w-full rounded-md
                                    sm:text-sm focus:ring-1 "
                        />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                        That title dude.
                    </p>
                </div>

                <div className="max-w-sm rounded-lg mx-auto bg-white shadow-lg mt-8 mb-8 pt-6 pb-5 px-6">
                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                        Project
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            defaultValue={this.props.project}
                            onChange={this.hanldeProjectChange}
                            className="mt-1 px-3 py-2 bg-white border shadow-sm
                                    border-slate-300 placeholder-slate-400
                                    focus:outline-none focus:border-sky-500
                                    focus:ring-sky-500 block w-full rounded-md
                                    sm:text-sm focus:ring-1 "
                        />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                        That project dude.
                    </p>
                </div>

                <div className="mt-6 text-center">
                    <button
                        onClick={this.handleSubmit}
                        className="bg-sky-500 hover:bg-sky-700 m-4 px-5 py-2.5
                        text-sm leading-5 rounded-md font-semibold text-white">
                        {submitText}
                    </button>
                    <button
                        onClick={this.props.onFormClose}
                        className="bg-red-500 hover:bg-red-700 px-5 py-2.5
                        text-sm leading-5 rounded-md font-semibold text-white">
                        Cancel
                    </button>
                </div>
            </div>

        );
    }
}

export default TimerForm;
import React from "react";
import TimerForm from "./timer/TimerForm";

// Parent component

class ToggleableTimerForm extends React.Component {
    state = {
        isOpen: false,
    };

    handleFormOpen = () => {
        this.setState({ isOpen: true });
    };

    handleFormClose = () => {
        this.setState({ isOpen: false });
    };

    handleFormSubmit = (timer) => {
        this.props.onFormSubmit(timer);
        this.setState({ isOpen: false });
    }

    render() {
        if (this.props.isOpen) {
            return (
                <TimerForm
                    onFormSubmit={this.handleFormSubmit}
                    onFormClose={this.handleFormClose}
                />
            );
        } else {
            return (
                <div className="justify-center flex">
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={this.handleFormOpen} className="h-5 w-5 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                </div>
            )
        }
    }
}

export default ToggleableTimerForm;
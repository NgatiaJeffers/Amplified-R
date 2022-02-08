import React from "react";

import EditableTimer from "./EditableTimer";

// Parent component

class EditableTimerList extends React.Component {
    render() {
        const timers = this.props.timers.map((timer) => (
            <EditableTimer
                key={timer.id}
                id={timer.id}
                title={timer.title}
                project={timer.project}
                elapsed={timer.elapsed}
                runningSince={timer.runningSince}
                onFormsubmit={this.props.onFormSubmit}
            />
        ));
        return (
            <div>
                {timers}
            </div>
        );
    }
}

export default EditableTimerList;
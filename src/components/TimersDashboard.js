import React from "react";
import { v4 as uuid } from 'uuid'
import "../js/helpers";

import EditableTimerList from "./TimerDashboard/EditableTimerList";
import ToggleableTimerForm from "./TimerDashboard/ToggleableTimerForm";


class TimersDashboard extends React.Component {
    state = {
        timers: [
            {
                title: 'Practice squat',
                project: 'Gym Chores',
                id: uuid(),
                elapsed: 5456099,
                runningSince: Date.now(),
            },
            {
                title: 'Bake squat',
                project: 'Kitchen Chores',
                id: uuid(),
                elapsed: 12345669,
                runningSince: null,
            },
        ],
    };

    handleEditFormSubmit = (attrs) => {
        this.updateTimer(attrs);
    }

    handleCreateFormSubmit = (timer) => {
        this.createTimer(timer);
    };

    createTimer = (timer) => {
        const t = window.helpers.newTimer(timer);
        this.setState({
            timers: this.state.timers.concat(t),
        });
    };

    updateTimer = (attrs) => {
        this, setState({
            timers: this.state.timers.map((timer) => {
                if (timer.id === attrs.id) {
                    return Object.assign({}, timer, {
                        title: attrs.title,
                        project: attrs.project,
                    });
                } else {
                    return timer;
                }
            }),
        });
    };

    render() {
        return (
            <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
                <div className="">
                    <EditableTimerList
                        timers={this.state.timers}
                        onFormSubmit={this.handleEditFormSubmit}
                    />
                    <ToggleableTimerForm
                        onFormSubmit={this.handleCreateFormSubmit}
                    />
                </div>
            </div>
        )
    }
}

export default TimersDashboard;
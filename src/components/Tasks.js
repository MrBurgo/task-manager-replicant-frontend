import React, { Component } from 'react';
import connect from 'react-redux';

class Tasks extends Component {
    render() {
        return (
            <div>
                { this.props.tasks.map((task, i) => (
                    <div key={i}>
                        <h4>{task.task_name}</h4>
                        <p>{task.body}</p>
                    </div>
                )
                )}
            </div>
        );
    }
}

export default Tasks;
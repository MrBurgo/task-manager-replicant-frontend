import React, { Component } from 'react';
import connect from 'react-redux';

class Tasks extends Component {
    render() {
        return (
            <div>
                { this.props.tasks.map((task, i) => <div key={i}><h2>{task.title}</h2><p>{task.body}</p></div>)}
            </div>
        );
    }
}

export default Tasks;
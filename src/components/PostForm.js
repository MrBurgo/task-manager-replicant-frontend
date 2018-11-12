import React, { Component } from 'react';
import connect from 'react-redux';

class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task_name: '',
            body: ''
        }
        this.textChange = this.textChange.bind(this);
    }

    textChange = (e) => {
        if (e.target.id === 'task_name') {
            this.setState({
                ...this.state,
                task_name: e.target.value
            })
        } else {
            this.setState({
                ...this.state,
                body: e.target.value
            })
        }
    }

    post = (e) => {
        e.preventDefault();
        const data = {
            task_name: this.state.task_name,
            body: this.state.body,
            user_id: 1
        };
        this.props.post(data);
        this.setState({
            task_name: '',
            body: ''
        })
    };

    render() {
        return (
            <div>
                <form onSubmit={this.post}>
                    <input placeholder="Title" id="task_name" value={this.state.task_name} onChange={this.textChange} />
                    <input placeholder="Body" id="body" value={this.state.body} onChange={this.textChange} />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default PostForm;
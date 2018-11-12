import React, { Component } from 'react';
import connect from 'react-redux';

class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: ''
        }
        this.textChange = this.textChange.bind(this);
    }

    textChange = (e) => {
        if (e.target.id === 'title') {
            this.setState({
                ...this.state,
                title: e.target.value
            })
        } else {
            this.setState({
                ...this.state,
                body: e.target.value
            })
        }
    }

    post = () => {
        const data = {
            title: this.state.title,
            body: this.state.body
        }
        this.props.post(data)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input placeholder="title" id="title" value={this.state.title} onChange={this.textChange} />
                    <input placeholder="body" id="body" value={this.state.body} onChange={this.textChange} />
                    <input type="submit" onSubmit={this.post} />
                </form>
            </div>
        );
    }
}

export default PostForm;
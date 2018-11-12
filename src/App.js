import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';
import Header from './components/Header';
import PostForm from './components/PostForm';
import Tasks from './components/Tasks';
import store from './store.js';

const API = `http://localhost:4000`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
      users: []
    }
    this.post = this.post.bind(this);
  }

  async componentDidMount() {
    const response = await fetch(`${API}/tasks`)
    if (response.status === 200) {
      const json = await response.json()
      this.setState({
        ...this.state,
        tasks: json
      })
    } else {
      console.log('Something went wrong: ', response.status)
    }
  }

  async post(data) {
    const response = await fetch(`${API}/tasks/new-task`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    if (response.status === 200) {
        const json = await response.json()
        this.setState({
            ...this.state,
            tasks: [...this.state.tasks, json]
        })
    } else {
        console.log('Something went wrong');
    }
}

  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <div className="form">
            <Tasks tasks={this.state.tasks} />
            <PostForm post={this.post}  />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    feeds: [],
    image: '',
    title: ''
  }

  inputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  postFeed = () => {
    const {image, title} = this.state;
    if(!image || !title) {
      return;
    }
    this.setState({
      feeds: [
        ...this.state.feeds,
        {
          image,
          title
        }
      ],
      image: '',
      title: ''
    });
  }

  render() {
    const { feeds } = this.state;
    return (
      <div className="App">
        <div className="post-form">
          <input value={this.state.image} onChange={this.inputChange} name="image" type="text" placeholder="Enter URL" />
          <input value={this.state.title} onChange={this.inputChange} name="title" type="text" placeholder="Title" />
          <button onClick={this.postFeed} name="post">
            New Post
          </button>
        </div>
        <ul className="feed-list">
          {
            feeds.map((feed, index) => (
              <li key={index} className="post">
                <div>{feed.title}</div>
                <img src={feed.image} alt={feed.title} />
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import { Posts } from './components/Posts';

class App extends React.Component {
  state = {
    posts: [
      {id: "abc1", name: "JS sucks"},
      {id: "abc2", name: "Php sucks"},
      {id: "abc3", name: "Pyhton sucks"},
      {id: "abc4", name: "c++ sucks"},
      {id: "abc5", name: "c# sucks"},
      {id: "abc6", name: "Ruby sucks"},
    ]
  }

  removePost = (id) => {
    this.setState({posts: this.state.posts.filter( item => item.id !== id )})
  }
  render() {
    const {posts} = this.state

    return (
      <div className='App'>
        <Posts posts = {posts}  removePost = {this.removePost} />
      </div>
    )
  }
}
export default App;

import React, { Component } from 'react';
import axios from 'axios';
const url = 'https://jsonplaceholder.ytpicode.com/posts/1'

const PrettyPost = props =>  (
  <div>
    <h3> Title: {props.post.title} </h3>
  </div>
)
class App extends Componet{
  constructor(props){
    super(props)
    this.state = {post: []};
    this.pushPostIntoState = this.pushPostIntoState.bind(this)
  }
}
PrettyPost.propTypes = {
  color: React.propTypes.strings
}
pushPostIntoState(){
  axios.get(url)
  .then(results => this.setState({posts: this.state.posts.concat(result.data)}))
}
componetDidMount(){
  this.pushPostIntoState(post);
}
render(){
  return(
    <div className = 'App'>
    {this.state.post.map(post, k ) => {
      return(
        <PrettyPost
          post = { post }
          color = 'red'
          <button onClick = {this.pushPostIntoState.bind(this)}>get another</button>
      )
    }
    </div>
  );
}
export.default App;
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;

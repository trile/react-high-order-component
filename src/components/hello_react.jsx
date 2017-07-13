import React, {Component} from 'react';

class HelloReact extends Component {
  constructor(props) {
    super(props);

    this.state = { hello: 'Hello React!'}
  }

  render() {
    return (
      <h1>this.state.hello</h1>
    )
  }
}

export default HelloReact;

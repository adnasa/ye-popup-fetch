import React, { Component } from "react";
import PropTypes from "prop-types";
import logo from "./logo.svg";
import "./App.css";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

class App extends Component {
  static propTypes = {
    client: PropTypes.object,
    requestBuilder: PropTypes.shape({
      // a shape with functions...
      products: PropTypes.object
    })
  };
  state = {
    products: []
  };
  componentDidMount() {
    const productRequest = {
      uri: this.props.requestBuilder.products.perPage(3).build(),
      method: "GET",
      headers
    };
    this.props.client.execute(productRequest).then(({ body }) => {
      this.setState({
        products: body.results
      });
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          {this.state.products.map(product => (
            <div key={product.id}>{product.masterData.current.name.en}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;

import './App.css';
import {Component} from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "./logo192.png";
import {
  Link
} from "react-router-dom";

export default class Configurator extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>Welcome to Crafty Containers</p>
            <Link className="notShittyLink" to="/shop">SHOP</Link>
            <Link className="notShittyLink" to="/conf">CONFIGURATOR</Link>
          </header>
        </div>
    );
  }

  showShop() {
    console.log("showing shop");
  }

  showConfigurator() {
    console.log("showing configurator")
  }
}

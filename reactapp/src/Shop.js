import './App.css';
import React, {Component} from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import shopBg from './shop.png';

export default class Configurator extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <img height={'900px'} src={shopBg} alt={"the shop view, an example, static, image"}/>
        </div>
    );
  }
}

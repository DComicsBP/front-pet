import React, { Component } from 'react';
import logo from './logo.svg';
import './nav.css';

class Navbar extends Component {
  render() {
    return (
      <div className="nav">
            <ul class="nav justify-content-end">
                <li class="nav-item">
                    <a class="nav-link " href="#">Pets</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Clientes</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Consultas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Login</a>
                </li>
            </ul>
        
      </div>
    );
  }
}

export default Navbar;

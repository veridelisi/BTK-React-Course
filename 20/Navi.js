import React, { Component } from 'react'
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,NavbarText} from "reactstrap";
import CartSummary from './CartSummary';
import {Link} from "react-router-dom"


export default class Navi extends Component {
    render() {
        return (
            
                <div>

  <Navbar
    color="light"
    expand="md"
    light
  >
    <NavbarBrand href="/">
      reactstrap
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <Link to="form1">
            Form Demo 1
          </Link>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            GitHub
          </NavLink>
        </NavItem>
         {/*cart props and remove function*/}
        <CartSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart}></CartSummary>
      </Nav>
      <NavbarText>
        Simple Text
      </NavbarText>
    </Collapse>
  </Navbar>

                
            </div>
        )
    }
}

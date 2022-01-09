import React, { Component } from 'react'
import { NavItem, NavLink,UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge } from "reactstrap";
import {Link} from "react-router-dom"
export default class CartSummary extends Component {

//EmptyCard Function
    renderEmptyCart(){
        return (
        <NavItem>
        <NavLink>
              Empty
        </NavLink>

        </NavItem>
        )
    }
//EmptyCard Function


//Summary Function
    renderSummary() {

        return (
            <UncontrolledDropdown
                inNavbar
                nav
            >
                <DropdownToggle
                    caret
                    nav
                >
                    {/*Navi uses cart state as props*/}
                    Options - {this.props.cart.length}
                </DropdownToggle>
                <DropdownMenu right>

                    {/*Listing Removing Adding Products*/}
                    {
                        this.props.cart.map(cartItem => (
                            <DropdownItem key={cartItem.product.id}>
                    <Badge  color="danger"  onClick={()=>this.props.removeFromCart(cartItem.product)}>x</Badge>
                                {cartItem.product.productName} -
                                <Badge color="success">{cartItem.quantity}</Badge>
          
                            </DropdownItem>

                        ))
                    }
                    {/*Listing Removing Adding Products*/}


                    <DropdownItem divider />
                    <DropdownItem>
                        <Link to="cart">Go to cart</Link>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )

    }
    //Summary Function



    render() {
        return (
            <div>
                {/* Empty cart? */}
                {  this.props.cart.length>0?this.renderSummary():this.renderEmptyCart()}
            </div>
        )
    }
}

import React, { Component } from 'react'
import { NavItem, NavLink,UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge } from "reactstrap";

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

                    {/*Listing Adding Products*/}
                    {
                        this.props.cart.map(cartItem => (
                            <DropdownItem key={cartItem.product.id}>
                                {cartItem.product.productName} -
                                <Badge color="success">{cartItem.quantity}</Badge>
                            </DropdownItem>

                        ))
                    }
                    {/*Listing Adding Products*/}


                    <DropdownItem divider />
                    <DropdownItem>
                        Reset
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



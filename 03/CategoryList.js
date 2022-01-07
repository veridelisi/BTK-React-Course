import React, { Component } from 'react'

import { ListGroup , ListGroupItem} from 'react-bootstrap'

export default class CategoryList extends Component {
    render() {
        return (
            <div>
                 
                <h2>{this.props.title}</h2>
                <ListGroup>
                    <ListGroupItem>Beverage</ListGroupItem>
                    <ListGroupItem>Beverage</ListGroupItem>
                    <ListGroupItem>Beverage</ListGroupItem>
                    <ListGroupItem>Beverage</ListGroupItem>
                    <ListGroupItem>Beverage</ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}

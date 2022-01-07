import React, { Component } from 'react'
import Navi from './Navi'
import CategoryList from './CategoryList'
import ProductList from './ProductList'
import { Container, Row, Col } from 'react-bootstrap'

export default class App extends Component {
  
  render() {
 
    let titleProduct="Product List"
    let titleCategory="Category List"
    return (
      <div>
        <Container>
          <Row>

          <Navi></Navi>
          </Row>

          <Row>
          //newLine
            <Col xs="3" ><CategoryList title={titleCategory}></CategoryList></Col>
            <Col xs="9"><ProductList  title={titleProduct}></ProductList></Col>

          </Row>

        </Container>

      </div>
    )
  }
}

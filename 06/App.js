import React, { Component } from 'react'
import Navi from './Navi'
import CategoryList from './CategoryList'
import ProductList from './ProductList'
import { Container, Row, Col } from 'react-bootstrap'

export default class App extends Component {
  
  render() {
  
    let productInfo={title:"Product List"}
    let categoryInfo={title:"Category List"}
    return (
      <div>
        <Container>
          <Row>

          <Navi></Navi>
          </Row>

          <Row>
         
            <Col xs="3" ><CategoryList info={categoryInfo}></CategoryList></Col>
            <Col xs="9"><ProductList  info={productInfo}></ProductList></Col>

          </Row>

        </Container>

      </div>
    )
  }
}

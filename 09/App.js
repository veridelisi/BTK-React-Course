import React, { Component } from 'react'
import Navi from './Navi'
import CategoryList from './CategoryList'
import ProductList from './ProductList'
import { Container, Row, Col } from 'react-bootstrap'

export default class App extends Component {

   /* currentCategory and products list*/
  state = { currentCategory: "" , products:[]}

  changeCategory = category => {

    this.setState({ currentCategory: category.categoryName })
  }
   /* currentCategory */


    /* products */

    componentDidMount(){
      this.getProducts()
                       }

  getProducts = () => {
    fetch("http://localhost:3000/products")
        .then(response => response.json())
        .then(response => this.setState({ products: response }))
    /* products */
}

  render() {
    //Props
    let productInfo = { title: "Product List" }
    let categoryInfo = { title: "Category List" }
    //Props
    return (
      <div>
        <Container>
          <Row>

            <Navi></Navi>
          </Row>

          <Row>
           
            <Col xs="3">
              {/*CategoryList Props */}
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}>
              </CategoryList>
            </Col>


            <Col xs="9">
              {/*ProductList Props */}
              <ProductList 
              products={this.state.products}
              currentCategory={this.state.currentCategory}
              info={productInfo}>
              </ProductList></Col>

          </Row>

        </Container>

      </div>
    )
  }
}

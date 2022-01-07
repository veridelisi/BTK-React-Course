import React, { Component } from 'react'
import Navi from './Navi'
import CategoryList from './CategoryList'
import ProductList from './ProductList'
import { Container, Row, Col } from 'react-bootstrap'

export default class App extends Component {

   /* currentCategory and products list and get products*/
  state = { currentCategory: "" , products:[]}

  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName })
    /* Categorylist sends the category database, we choose category.id
    and send it to the getProducts*/
    this.getProducts(category.id)
  }
  /* currentCategory and products list and get products*/


    /* Get products and category.id and send to the products state 
    category.id===product.categoryID*/

    componentDidMount(){
      this.getProducts()
                       }

  getProducts = (categoryId) => {
    let url="http://localhost:3000/products";
    if(categoryId){
      url += "?categoryId=" +categoryId;
    }
    fetch(url)
        .then(response => response.json())
        .then(response => this.setState({ products: response }))
    /* Get products and send to the products state */
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
              {/*CategoryList Props State Function*/}
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}>
              </CategoryList>
            </Col>


            <Col xs="9">
              {/*ProductList Props State*/}
              <ProductList 
              products={this.state.products}
              currentCategory={this.state.currentCategory}
              info={productInfo}>
              </ProductList>
              </Col>

          </Row>

        </Container>

      </div>
    )
  }
}


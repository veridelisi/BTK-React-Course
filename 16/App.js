import React, { Component } from 'react'
import Navi from './Navi'
import CategoryList from './CategoryList'
import ProductList from './ProductList'
import { Container, Row, Col } from 'react-bootstrap'

export default class App extends Component {

   /* currentCategory and products list and get products and cart list*/
  state = { currentCategory: "" , products:[], cart:[]}

  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName })
    /* Categorylist sends the category database, we choose category.id
    and send it to the getProducts*/
    this.getProducts(category.id)
  }
    /* currentCategory and products list and get products and cart list*/


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

/* addToCart : product data come from ProductList
               newCart add product to product 
               newCart add 1 to quantity*/
addToCart=(product)=>{
  let newCart=this.state.cart
  var addedItem=newCart.find(c=>c.product.id===product.id)
  if(addedItem){
    addedItem.quantity +=1
  }
  else{
    newCart.push({product:product, quantity:1})
      }
  
  this.setState({cart:newCart}) 
                      }
/* addToCart : product data come from ProductList
               newCart add product to product 
               newCart add 1 to quantity*/

/* removeFromCart : product data come from ProductList
when you click the "x", product.id===product.id
               */
    removeFromCart=(product)=>{
    let newCart=this.state.cart.filter(c=>c.product.id!==product.id)
    this.setState({cart:newCart})
/* removeFromCart : product data come from ProductList
when you click the "x", product.id===product.id           */

                               }           

  render() {
    //Props
    let productInfo = { title: "Product List" }
    let categoryInfo = { title: "Category List" }
    //Props
    return (
      <div>
        <Container>
          {/*We sent card data and removeFromCart function*/}
          <Navi   removeFromCart={this.removeFromCart} cart={this.state.cart}   ></Navi>
          <Row>

            
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
              {/*ProductList Props State Function*/}
              <ProductList 
              addToCart={this.addToCart}
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



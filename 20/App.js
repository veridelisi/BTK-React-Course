import React, { Component } from 'react'
import Navi from './Navi'
import CategoryList from './CategoryList'
import ProductList from './ProductList'
import { Container, Row, Col } from 'react-bootstrap'
import alertify from "alertifyjs"
import {Switch, Route} from "react-router-dom"
import NotFound from "./NotFound"
import CartList from "./CartList"
import FormDemo1 from './FormDemo1'

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
               newCart add 1 to quantity
               alertify*/
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
  alertify.success(product.productName +"added to cart")
                      }
/* addToCart : product data come from ProductList
               newCart add product to product 
               newCart add 1 to quantity
               alertify*/








/* removeFromCart : product data come from ProductList
when you click the "x", product.id===product.id and alertify
               */
    removeFromCart=(product)=>{
    let newCart=this.state.cart.filter(c=>c.product.id!==product.id)
    this.setState({cart:newCart})
    alertify.error(product.productName +"removed from cart")
/* removeFromCart : product data come from ProductList
when you click the "x", product.id===product.id    and alertify       */

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

            {/*Route and switch*/}
            <Col xs="9">

            <Switch>
            <Route  exact path="/"  render={props=>(
               
              <ProductList 
              {...props}
              addToCart={this.addToCart}
              products={this.state.products}
              currentCategory={this.state.currentCategory}
              info={productInfo}
              />
            )


            } />


            <Route   exact path="/cart"   render={props=>(
               
               <CartList 
               {...props}
               removeFromCart={this.removeFromCart}
               cart={this.state.cart}
               />
             )
 

             }/>


<            Route  path="/form1"  component={FormDemo1}></Route>
            <Route     component={NotFound}></Route>
            
            </Switch>


              
              </Col>

          </Row>

        </Container>

      </div>
    )
  }
}


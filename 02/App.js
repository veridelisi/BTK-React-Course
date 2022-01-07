import React, { Component } from 'react'
import Navi from'./Navi'
import CategoryList from './CategoryList'
import ProductList from './ProductList'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navi></Navi>
        <ProductList></ProductList>
        <CategoryList></CategoryList>
        
      </div>
    )
  }
}

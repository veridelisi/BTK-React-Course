import React, { Component } from 'react'
import { Table , Button} from 'react-bootstrap'

export default class ProductList extends Component {
   /* addtoCart alert*/
    addtoCart=(product)=>{
        alert(product.productName)
    /* addtoCart alert*/


    }
    render() {
        return (
            <div>
                <h2>{this.props.info.title}-{this.props.currentCategory} </h2>

                <Table>
                    <thead>
                        <tr>
                           <th> #</th>
                           <th>Product Name</th>
                           <th>Unit Price</th>
                           <th>Quantity Per Unit</th>
                           <th>Units in Stock</th>
                           <th></th>
                        </tr>
                    </thead>
                    <tbody>
                          {/*ProductList Map*/}
                        {

                            this.props.products.map(product => (
                                <tr key={product.id}>
                                    <th scope="row">{product.id}</th>
                                    <td>{product.productName}</td>
                                    <td>{product.unitPrice}</td>
                                    <td>{product.quantityPerUnit}</td>
                                    <td>{product.unitsInStock}</td>
                                    {/*Add to Cart*/}
                                    <td><Button  onClick={()=>this.addtoCart(product)}     color="info">Add</Button></td>
                                    

                                </tr>

                            ))
                        }
                           {/*ProductList Map*/}
                    </tbody>
                </Table>

            </div>
        )
    }
}


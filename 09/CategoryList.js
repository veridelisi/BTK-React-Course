import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'


export default class CategoryList extends Component {

    /* CategoryList DataBase*/
    state = {
        categories: []
            }

    componentDidMount(){
        this.getCategories()
    }

    getCategories = () => {
        fetch("http://localhost:3000/categories")
            .then(response => response.json())
            .then(response => this.setState({ categories: response }))
    }



    render() {
        return (
            <div>
                <h2>{this.props.info.title}</h2>
                <h3>{this.state.counter}</h3>
                <ListGroup>
                
                    {
                        //CategoryList Items with Map
                        this.state.categories.map(category => (
                            <ListGroupItem
                                key={category.id}
                                onClick={() => this.props.changeCategory(category)}>

                                {category.categoryName}

                            </ListGroupItem>
                        ))
                    }

                </ListGroup>
                
                <h4>{this.props.currentCategory}</h4>
            </div>
        )
    }
}




import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export class FilterableProductTable extends Component {
    constructor(props) {
        super(props)
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
        
        this.state = {
             filterText: '', inStockOnly: false
        };
    }
    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        })
    }

    handleInStockChange(inStockOnly) {
        this.setState({
            inStockOnly: inStockOnly
        })
    }

    render() {
        return (
        <div className="table">
            <h3>PRODUCTS FILTER</h3>
            <SearchBar 
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
            onFilterTextChange={this.handleFilterTextChange}
            onInStockChange={this.handleInStockChange}
            />
            <ProductTable 
            products={this.props.products}
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
            />
        </div>
        )
    }
}

export default FilterableProductTable



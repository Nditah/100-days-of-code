import React, { Component } from 'react'

export class SearchBar extends Component {
    constructor(props) {
        super(props)
    
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
      }
      
      handleInStockChange(e) {
        this.props.onInStockChange(e.target.checked);
      }
    
    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        return (
            <div>
                <input 
                type="text" 
                placeholder="Search..."
                value={this.props.filterText}
                onChange={this.handleFilterTextChange}
                />
                <br/>
                <input 
                type="checkbox" 
                checked={inStockOnly}
                id="checkbox" 
                checked={this.props.inStockOnly}
                onChange={this.handleInStockChange}
                />
                <label htmlFor="checkbox">Only show products in stock</label>
            </div>
        )
    }
}

export default SearchBar

import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

function FilterableProductTable(props) {

  return (
    <div className="table">
      <SearchBar />
      <ProductTable products={props.products}/>
    </div>
  )
}

export default FilterableProductTable



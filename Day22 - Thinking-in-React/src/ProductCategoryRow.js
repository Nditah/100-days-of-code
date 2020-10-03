import React from 'react'

function ProductCategoryRow(props) {
    const category = props.category
    return (
        <tr>
            <th colSpan="2">{category}</th>
        </tr>
    )
}

export default ProductCategoryRow




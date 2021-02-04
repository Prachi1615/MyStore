import React from 'react';
import "./ProductCategory.css"
import "./Product.js"
import Product from './Product.js';

function ProductCategory({ id, title, image }) {
    return (
        <div className="product__brand">
            <div className="brand__info">
                <span>{title}</span>

            </div>

            <img src={image} alt="" />
            <Product >

            </Product>

        </div>
    )
}

export default ProductCategory

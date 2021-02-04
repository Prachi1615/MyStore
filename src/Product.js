import React from 'react';
import "./Product.css"

function Product({ id, title, image, price, quantity }) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            </div>

            <img src={image} alt="" />

            <button>
                <div className="product__quantity">
                </div>
            </button>
        </div>
    )
}

export default Product

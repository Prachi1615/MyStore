import React from 'react';
import "./Product.css"

function Product({ id, title, image, price, quantity, content }) {
    return (
        <div className="product">
            <div className="product__title">
                <p>{title}</p>
            </div>

            <img src={image} alt="" />
            <div className="product__info">
                <p>{content}</p>
            </div>
            <div className="product__price">
                <small>₹</small>
                <p>{price}</p>
            </div>

        </div>
    )
}

export default Product

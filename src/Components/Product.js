import React from 'react';
import "./Product.css"
function NewlineText(props) {
    const text = props.text;
    return text.split('\n').map(str => <p>{str}</p>);
}

function Product({ id, title, image, price, quantity, content, category }) {
    return (
        <div className="product">

            <img src={image} alt="" />
            <div className="product__title">
                <NewlineText text={title}></NewlineText>
            </div>
            <div className="product__price">
                <small>₹</small>
                <p>{price}</p>
            </div>
            <div className="product__info">
                <p>{content}</p>
            </div>

        </div>
    )
}

export default Product

import { Link } from 'react-router-dom'
import React from 'react'
import "./Category.css"

function Category({ title, image }) {
    return (

        <div className="category">
            <div className="category__info">
                <p>{title}</p>
            </div>

            <img src={image} alt="" />

        </div>
    )
}


export default Category

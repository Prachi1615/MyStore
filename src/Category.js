import { Link } from 'react-router-dom'
import React from 'react'
import "./Category.css"
import ProductCategory from './ProductCategory'

function Category() {
    return (
        <nav className="category">
            <br />
            <br />
            <div className="category__nav">
                <Link to="/ciggarettes" className="category__link">
                    <ProductCategory
                        id="1"
                        title="CIGGARETTES">

                    </ProductCategory>
                </Link>


            </div>
            <div className="category__nav">
                <Link to="/hookah" className="category__link">
                    <ProductCategory
                        id="2"
                        title="HOOKAH">

                    </ProductCategory>
                </Link>

            </div>
        </nav>
    )
}

export default Category

import React from 'react'
import { Link } from 'react-router-dom';

const Listing = () => {
    return (
        <div style={{ padding: "2rem" }}>
            <h4>Product Name : Test Product 1</h4>
            <Link to='/payment/381482/125421'>Buy Now</Link>
            <hr></hr>
        </div>
    )
}

export default Listing;
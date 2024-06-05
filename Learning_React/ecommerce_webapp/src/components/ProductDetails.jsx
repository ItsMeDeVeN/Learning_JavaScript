import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://dummyapi.online/api/products/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(".ok of the API comes out to be false.");
                }
                return response.json();
            })
            .then(data => {
                setProduct(data);
            })
            .catch(error => {
                console.error('Error fetching product details:', error);
            });
    }, [id]);

    if (!product) {
        return <div>Fetching data ...</div>;
    }

    return (
        <div className="product-details">
            <h2>{product.name}</h2>
            <p>Category: {product.productCategory}</p>
            <p>Brand: {product.brand}</p>
            <p>Description: {product.description}</p>
            <p>Price: ${product.basePrice}</p>
            <Link to={`/`}>
            <button className="back-button">Back-To-Details</button>
            </Link>
            {/* Add more details if needed */}
        </div>
    );
};

export default ProductDetails;

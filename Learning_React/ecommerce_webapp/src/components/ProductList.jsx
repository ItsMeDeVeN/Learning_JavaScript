import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch("https://dummyapi.online/api/products")
            .then(response => {
                if (!response.ok) {
                    throw new Error(".ok of the API comes out to be false.");
                }
                return response.json();
            })
            .then(data => {
                setProducts(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    return (
        <div className="app">
            <h1><center><u>User List</u></center></h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {products.map(product => (
                    <div key={product.id} style={{ width: '30%', margin: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
                        <h2>{product.name}</h2>
                        <p>Category: {product.productCategory}</p>
                        <p>Brand: {product.brand}</p>
                        <p>Description: {product.description}</p>
                        <p>Price: ${product.basePrice}</p>
                        <Link to={`/ProductDetails/${product.id}`}>
                            <button style={{ display: 'block', marginTop: '10px', padding: '5px 10px', border: 'none', borderRadius: '3px', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}>Details</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;

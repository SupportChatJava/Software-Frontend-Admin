import React, {Component, useEffect, useRef, useState} from 'react';
import axios from "../../api/axios";

const Products = () => {
    //Make form push to backend
    const errorRef = useRef();
    const [error, setError] = useState('');
    const [products, setProducts] = useState('');
    const PRODUCTS_URL = "/api/products"

    useEffect( () => {
        getProducts();
    }, [])

    async function getProducts(){
        try{
            const response = await axios.get(PRODUCTS_URL);

            setProducts(response.data);
            console.log("Get products succes")
        }catch(error){
            console.log("Get products failed")
        }

    }


    return (
        <div>
            <h1>Products</h1>
            { Array.isArray(products) ? products.map(product =>
                <li key={product.id}>
                    <a href={"product/"+product.id}>{product.id} - {product.name}</a>
                </li>

            ) : null}
        </div>
    );
}

export default Products;

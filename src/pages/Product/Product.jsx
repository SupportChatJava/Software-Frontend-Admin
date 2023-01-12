import React, {Component, useEffect, useRef, useState} from 'react';
import axios from "../../api/axios";
import {useParams} from 'react-router-dom';

const Product = () => {
    //Make form push to backend
    const errorRef = useRef();
    const [error, setError] = useState('');
    const [product, setProduct] = useState('');
    const ProductID = useParams().id;
    const PRODUCT_URL = "/api/product/"
    const TEMP_USERID = 1;

    useEffect( () => {
        getProduct();
    }, [])


    async function getProduct(){
        try{
            const response = await axios.get(PRODUCT_URL + ProductID);
            setProduct(response.data);
            console.log("Get product success")
        }catch(error){
            console.log("Get product failed")
        }

    }


    return (
        <div>
            <h1>Product</h1>
            <p>Name: {product.name}</p>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
        </div>
    );
}

export default Product;

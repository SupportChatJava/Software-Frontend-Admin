import React, {Component, useEffect, useRef, useState} from 'react';
import axios from "../../api/axios";

const Products = () => {
    //Make form push to backend
    const errorRef = useRef();
    const [error, setError] = useState('');
    const [products, setProducts] = useState('');
    //const [productList, setProductList] = useState('') ;
    const PRODUCT_URL = "/api/product/"
    const PRODUCTS_URL = "/api/products/"

    // const cartOfProducts = [];
    // const tempProductList = [];
    const selectedProducts = [];


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

    const buyProducts = async (e) =>{
        e.preventDefault();
        try{
            const response = await axios.post((PRODUCT_URL), JSON.stringify(selectedProducts),
                {
                    headers: { 'Content-Type': 'application/json'},
                    withCredentials: false
                }
            );
            window.location="/cart/user/1";
        }catch(error){
            if(!error.response){
                setError("Database could not be reached");
                console.log("fail");
            }
        }
    }

    function addProductToCart(product){
        selectedProducts.push(product);
        console.log(selectedProducts)
    }


    return (
        <div className="row">
            <div>
                <h1>Products</h1>
                { Array.isArray(products) ? products.map(product =>
                    <div key={product.id}>
                        <a className="float-md-start" href={"product/"+product.id}>{product.id} - {product.name}</a>
                        <button id={"product" + product.id} onClick={addProductToCart.bind(this, product)} className="btn btn-primary">Select</button>
                    </div>

                ) : null}
            </div>
            <button id="BuyButton" onClick={buyProducts} className="btn btn-primary">Buy</button>

            {/*<div>*/}
            {/*    <h1>Cart</h1>*/}
            {/*    { Array.isArray(tempProductList) ? tempProductList.map(tempProduct =>*/}
            {/*        <li key={tempProduct.id}>*/}
            {/*            <p> {tempProduct.name}</p>*/}
            {/*        </li>*/}

            {/*    ) : null}*/}
            {/*</div>*/}
        </div>
    );
}

export default Products;

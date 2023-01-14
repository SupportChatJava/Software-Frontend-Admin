import React, {Component, useEffect, useRef, useState} from 'react';
import axios from "../../api/axios";

const Products = () => {
    //Make form push to backend
    const errorRef = useRef();
    const [error, setError] = useState('');
    const [carts, setCarts] = useState('');
    const CARTUSER_URL = "api/cart/user/"
    const tempURL = "api/cart/user/1"


    useEffect( () => {
        getCarts();
    }, [])

    async function getCarts(){
        try{
            const response = await axios.get(tempURL);
            setCarts(response.data)
            console.log(carts[0].product);
            console.log("Get carts success")
        }catch(error){
            console.log("Get carts failed")
        }

    }





    return (
        <div className="row">
            <div>
                <h1>Products</h1>
                { Array.isArray(carts) ? carts.map(cart =>
                    <div>
                        <h2>{cart.id}</h2>
                        <table className="table">
                            <tr>
                                <th>ID</th>
                                <th>Product</th>
                                <th>price</th>
                                <th>Description</th>
                            </tr>
                                {Array.isArray(cart.product) ? cart.product.map(product =>
                                    <tr>
                                        <td id={"BoughtProductName"+product.name}>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.description}</td>
                                    </tr>

                                ) : null}
                        </table>
                    </div>



                ) : null}
            </div>

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

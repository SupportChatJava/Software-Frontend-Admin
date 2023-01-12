import React, {Component, useEffect, useRef, useState} from 'react';
import axios from "../../api/axios";
import {useParams} from 'react-router-dom';

const Users = () => {
    //Make form push to backend
    const errorRef = useRef();
    const [error, setError] = useState('');
    const [user, setUser] = useState('');
    const userId = useParams().id;
    const USER_URL = "/api/user/"

    useEffect( () => {
        getUser();
    }, [])

    const updateUser = async (e) =>{
        window.location = "/"
    }

    async function getUser(){
        try{
            const response = await axios.get(USER_URL + userId);
            setUser(response.data);
            console.log("Get user succes")
        }catch(error){
            console.log("Get user failed")
        }

    }


    return (
        <div>
            <h1>User</h1>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
            <a href={"edit/"+user.id}>Edit</a>

        </div>
    );
}

export default Users;

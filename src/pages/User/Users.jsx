import React, {Component, useEffect, useRef, useState} from 'react';
import axios from "../../api/axios";

const Users = () => {
    //Make form push to backend
    const errorRef = useRef();
    const [error, setError] = useState('');
    const [users, setUsers] = useState('');
    const USERS_URL = "/api/users"

    useEffect( () => {
        getUser();
    }, [])

    async function getUser(){
        try{
            const response = await axios.get(USERS_URL);
            setUsers(response.data);
            console.log("Get users succes")
        }catch(error){
            console.log("Get users failed")
        }

    }


    return (
        <div>
            <h1>Users</h1>
            { Array.isArray(users) ? users.map(user =>
                <li key={user.id}>
                    <a href={"user/"+user.id}>{user.id} - {user.email}</a>
                </li>

            ) : null}
        </div>
    );
}

export default Users;

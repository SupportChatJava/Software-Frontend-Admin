import React, { useEffect, useRef, useState, useContext } from "react";
import axios from "../../api/axios";
import {useParams} from "react-router-dom";

const Register = () => {
    //Make form push to backend
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const errorRef = useRef();
    const userId = useParams().id;

    const USER_URL = "/api/user/"
    const USERS_URL = "/api/users"

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState('');


    useEffect(() => {
        emailRef.current.focus();
        getUser();
    }, [])

    async function getUser(){
        try{
            const response = await axios.get(USER_URL + userId);
            setUser(response.data);
            setEmail(user.email)
            setPassword(user.password)
            console.log("Get user success")
        }catch(error){
            console.log("Get user failed")
        }

    }

    const handleSubmit = async (e) =>{
        console.log(JSON.stringify({email, password}));
        e.preventDefault();
        try{
            const response = await axios.put((USER_URL + userId), JSON.stringify({email, password}),
                {
                    headers: { 'Content-Type': 'application/json'},
                    withCredentials: false
                }
            );

            window.location = "/user/" + userId;
        }catch(error){
            if(!error.response){
                setError("Database could not be reached");
                console.log(error);
            }else if (error.response?.status === 500){
                setError("no server connection was made")
                console.log("no server connection was made");
            }else if (error.response?.status === 403){
                setError("Email already in use")
            }
        }

    } 

    return (
        <>
        <div>
            <p ref={errorRef}> {error}</p>
            <h1>User</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input id="emailInput" type="email" className="form-control" value={email} ref={emailRef} onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp" placeholder="Enter email"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="text" className="form-control" value={password} ref={passwordRef} onChange={(e) => setPassword(e.target.value)} id="passwordInput" placeholder="Password"></input>
                </div>
                <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
        </div>
       </>
    );
}
 
export default Register;


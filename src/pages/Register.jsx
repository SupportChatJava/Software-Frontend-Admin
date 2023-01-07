import React, { useEffect, useRef, useState, useContext } from "react";
import axios from "../api/axios";
 
const Register = () => {
    //Make form push to backend
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const errorRef = useRef();

    const REGISTER_URL = "/api/register"

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await axios.post(REGISTER_URL, JSON.stringify({email, password}), 
                {
                    headers: { 'Content-Type': 'application/json'},
                    withCredentials: false
                }
            );
            window.location = "/login"
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
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" value={email} ref={emailRef} onChange={(e) => setEmail(e.target.value)} id="emailInput" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" value={password} ref={passwordRef} onChange={(e) => setPassword(e.target.value)} id="passwordInput" placeholder="Password"></input>
                </div>
                <button type="submit" id="submit" className="btn btn-primary">Submit</button>
                </form>
        </div>
       </>
    );
}
 
export default Register;


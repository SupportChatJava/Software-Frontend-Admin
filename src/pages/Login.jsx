import React, {useEffect, useRef, useState} from "react";
import axios from "../api/axios";


function App() {
    //Make form push to backend
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const errorRef = useRef();

    const LOGIN_URL = "/api/login"

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
            const response = await axios.post(LOGIN_URL, JSON.stringify({email, password}),
                {
                    headers: { 'Content-Type': 'application/json'},
                    withCredentials: false
                }
            );
            window.location = "/users"
        }catch(error){
            if(!error.response){
                setError("Database could not be reached");
                console.log("fail");
            }else if (error.response?.status === 500){
                setError("no server connection was made")
                console.log("no server connection was made");
            }else if(error.response?.status === 401){
                setError("Email was not found")
            }else if(error.response?.status === 403){
                setError("Password did not match")
            }
        }
    }



    return (
      <>
          <div>
              <p ref={errorRef}> {error}</p>
              <h1>Login</h1>
              <form onSubmit={handleSubmit}>
                  <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input type="email" className="form-control" value={email} ref={emailRef} onChange={(e) => setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                  </div>
                  <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input type="password" className="form-control" value={password} ref={passwordRef} onChange={(e) => setPassword(e.target.value)} id="exampleInputPassword1" placeholder="Password"></input>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
              </form>
          </div>
      </>
  );
}

export default App;

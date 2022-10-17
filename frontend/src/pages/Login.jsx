import React, {useState} from 'react'
import {useHistory} from "react-router-dom"


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();


  async function login() {
    
    let item = {email, password}

    let result = await fetch("http://localhost:8000/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(item)
    });
    result = await result.json();
    localStorage.setItem("user-info",JSON.stringify(result))
    history.push("/add")
  }

  return (
    <>
      
      <div className="col-sm-6 offset-sm-3" dir="rtl">
        <h1>ورود به حساب کاربری</h1>
        <br />

        <input onChange={(e)=> setEmail(e.target.value)} type="text" className="form-control" placeholder="ایمیل" />
        <br />

        <input onChange={(e)=> setPassword(e.target.value)} type="password" className="form-control" placeholder="رمزعبور" />
        <br />

        <button onClick={login} className="btn btn-primary">ورود</button>
      </div>
     
       
    </>
  )
}

export default Login
import React, {useState} from 'react'
import {useHistory} from "react-router-dom"

const Register = (props) => {

  

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory();

   const signUp = async () => {

    let item = {name,email,password}

    let result = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"

      }
    })
    result = await result.json()
    localStorage.setItem("user-info", JSON.stringify(result))
    
    history.push("/add")
  }

  


  return (
    <>
        <div className="col-sm-6 offset-sm-3" dir="rtl">
          <h1>ثبت نام کنید</h1>
          <br />
          
          <input value={name} onChange={(e)=>setName((e.target.value))} type="text" className="form-control" placeholder="اسم" />
          <br />

          <input value={email} onChange={(e)=>setEmail((e.target.value))} type="text" className="form-control" placeholder="ایمیل" />
          <br />

          <input value={password} onChange={(e)=>setPassword((e.target.value))} type="password" className="form-control" placeholder="رمزعبور" />
          <br />
          <button onClick={signUp} className="btn btn-primary">ثبت نام</button>
        </div>

    </>
  )
}

export default Register
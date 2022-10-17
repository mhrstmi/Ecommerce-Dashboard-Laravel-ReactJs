import React, {useEffect} from 'react'
import {useHistory} from "react-router-dom"


const Protected = (props) => {
    
    
    let Cmp = props.Cmp
    const history = useHistory();
    props.changeLoginState()

    useEffect(() =>{
        
        
        if(!localStorage.getItem("user-info")) {
            history.push("/register")
          
        } else {
            if(props.url === "/login" || "/register") {
                history.push("/add")
            }
        }
      }, [])

      

  return (
    <>
        <Cmp />
    </>
  )
}

export default Protected
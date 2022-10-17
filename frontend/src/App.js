import './App.css';
import React, {useState, useEffect} from 'react'
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import AddProduct from './pages/AddProduct';
import Protected from './components/Protected';
import ProductList from './pages/ProductList';

localStorage.getItem("user-info")

function App() {
  

  const [loginState, setLoginState] = useState(false);
  

  const changeLoginState = () => {
    if (localStorage.getItem("user-info")) {
      setLoginState(true)
    } 
  }


  return (
    <div>
      <Router>
        <Header loginState={loginState}/>
        
        <Switch>

          <Route path="/login" exact>
            <Protected Cmp={Login} url="/login" loginState={loginState} changeLoginState={changeLoginState} />
          </Route> 

          <Route path="/register" exact>
            <Protected Cmp={Register} url="/register" loginState={loginState} changeLoginState={changeLoginState}/>
          </Route>

          <Route path="/add" exact>
            <Protected Cmp={AddProduct} url="/add" loginState={loginState} changeLoginState={changeLoginState}/>
          </Route>

          <Route path="/list" exact>
            <Protected Cmp={ProductList} url="/list" loginState={loginState} changeLoginState={changeLoginState}/>
          </Route>


        </Switch>

      </Router>
    </div>
  );

  
}



export default App;

import React, {Component} from 'react';
import "./login.css";
class Login extends Component{
    render(){
      return (
        <div>
            <form action="/dashboard" method="get">
                <div className="container">
                    <label ><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname"/>

                    <label ><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" />

                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
      )
    }
  }
  
export default Login;
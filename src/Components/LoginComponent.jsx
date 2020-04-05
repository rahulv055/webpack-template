import React from 'react';

import './Login.css';
import Button from '../Components/Button.jsx';


class LoginComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            userName: '',
            password: ''
        }
    }

     handleChange = (e) => {
      this.setState({[e.target.name]:e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.history.push("/Home");
  }

    render(){
        const{match}=this.props;
        console.log(match.url);
        return (
            <div className='card'>
                <h1 style={{textAlign: 'center'}}>USER LOGIN</h1>
            <form className="login-form">
            <input className="input-box" name="userName" type="text" placeholder="....Enter Username" value={this.state.userName} onChange={this.handleChange}/> 
            <input className="input-box" name="password" type="password" placeholder="...Password" value={this.state.password} onChange={this.handleChange} />
           <Button onClick={this.handleSubmit}>LOGIN</Button>
         </form>
         </div>
        );
    }
}

export default LoginComponent;
import React, {Component} from 'react'
import {Navigate} from 'react-router-dom'

class Login extends Component{

    state = {
        credentials:{
            email: '',
            password: ''
        },
        redirect:false
    }

    login = (event) => {
        event.preventDefault();
        console.log(this.state.credentials);
        fetch('http://localhost:9000/login', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(this.state.credentials)
        }).then(
            res => {
                console.log(res);
                res.json().then(data => {
                    console.log(data)
                    if (data.token){
                        localStorage.setItem('token', data.token)
                    }
                    if(!data.token){
                        localStorage.setItem('token', data.error)
                    }
                });
            }
        ).then(() => this.setState({redirect:true}))
    }

    inputChange = (event) => {
        const credential = this.state.credentials;
        credential[event.target.name] = event.target.value;
        this.setState({credentials : credential});
    }

    render(){
        const {redirect} = this.state;
        if (redirect) {
            return <Navigate to="/emr"/>
        }
        return(
            <div className='emr__login'>
                <form>
                    <h3>Enter details to Login in the EMR</h3>
                    <input 
                        type="text"
                        placeholder='enter first email...'
                        value={this.state.credentials.emal}
                        onChange={this.inputChange}
                    />
                    <input 
                        type="password"
                        placeholder='enter password...'
                        value={this.state.credentials.firstnae}
                        onChange={this.inputChange}
                    />
                    <input 
                        type="submit"
                        className='btn'
                        onClick={this.login}
                    />
                </form>
            </div>
        )
    }
}

export default Login;
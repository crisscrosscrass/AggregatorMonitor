import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component{
    constructor(){
    		super()
    		this.state = {
                  backend_message: null,
                }
    }
    componentDidMount() {
        axios.get("http://localhost:8080/api/hello").then(res => {
            console.log("Received Successful response from server!");
            console.log(res);
            this.setState({backend_message:res.data})
          }, err => {
            console.log("Server rejected response with: " + err);
          });
          axios.post("http://localhost:8080/api/check", {data:"Hello Backend, this is a message from Frontend"}).then(res => {
            console.log("Send something to the Server...");
            console.log(res);
          }, err => {
            console.log("Server rejected response with: " + err);
          });
    }
    render(){
    		return (
                <div className="App">
                  <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                      Backend Message:
                    </p>
                    <i className="App-link" >
                      {this.state.backend_message}
                    </i>
                  </header>
                </div>
              )
    	}
}

export default App;

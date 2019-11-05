import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component{
    constructor(){
    		super()
    		this.state = {
                  backend_message: null,
                  user_message: ""
                }
            this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        axios.get("http://localhost:8080/api/hello").then(res => {
            console.log("Received Successful response from server!");
            console.log(res);
            this.setState({backend_message:res.data})
          }, err => {
            console.log("Server rejected response with: " + err);
          });
          axios.post("http://localhost:8080/api/check", ["Hello Backend, this is a message from Frontend","Wondering how?","Use the Button to test something"]).then(res => {
            console.log("Send something to the Server...");
            console.log(res);
          }, err => {
            console.log("Server rejected response with: " + err);
          });
    }
   handleClick(){
        alert("Sending '"+ this.messageValue.value + "' this to the Backend...")
        console.log(this.messageValue.value)
        axios.post("http://localhost:8080/api/send", ["This is what you send: ",this.messageValue.value,]).then(res => {
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
                    <div>
                        Send Text to Backend:
                        <input type="text" ref={ref => this.messageValue=ref} />
                        <input type="submit" value="Submit" onClick={this.handleClick}/>
                    </div>
                  </header>
                </div>
              )
    	}
}

export default App;

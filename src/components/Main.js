import React, {Component} from 'react';
import './Main.css';
import SmsPage from './SmsPage';
import ApiStore from './ApiStore';
import SmsReport from './SmsReport';
import { Route, IndexRoute } from 'react-router';
import App from '../App';
import Navigation from './Navigation';
import InterfaceButton from './InterfaceButton';

class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
      sms: [],
      isLoading: true,
      apiKey: '',
      keyMessage: '',
      apiInputKey: '',
      apiSecretKey: '',
      statusCode: '',
      fromUser: '',
      toUser: '',
      message: '',
      error: '',
      nextButton: false,
      showSmsPage: false,
      showApiPage: true,
      KeyText: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeKey = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeys = this.handleKeys.bind(this);
    this.showSmsPage = this.showSmsPage.bind(this);
  }

  sendMessage = async (e) => {
    e.preventDefault();
    const fromUser = e.target.elements.fromUser.value;
    const toUser = e.target.elements.toUser.value;
    const message = e.target.elements.message.value;
    const api_call = await fetch(`https://api.smsglobal.com/http-api.php?action=sendsms&user=tkzifhxw&password=JSU3RskJ&from=${fromUser}&to=${toUser}&text=${message}&maxsplit=2`);
          
    const data = api_call;
    this.setState({statusCode: data.status})
    console.log(data);
    const status = this.state.statusCode;
    if(status) {
          this.setState({
            loading: false,
            fromUser,
            toUser,
            message,
            error: '',
            status
        }); 

        } else {
            this.setState({
            loading: false,
            fromUser,
            toUser,
            message,
            error: 'Cannot send message',
            status
        }); 
            
        }
        
    }

    handleKeys = async (e) => {
      e.preventDefault();
      console.log(this.state.nextButton);
      this.setState({nextButton: true})
        const apiInputKey = e.target.elements.userName;
        const apiSecretKey = e.target.elements.password;
        const apiKey = this.state.apiKey;
        debugger;
        const api_call = await fetch("https://api.smsglobal.com/v2/sms/ HTTP/1.1", {
          method: "GET",
          headers: {
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Methods': 'POST, GET',
            'Access-Control-Allow-Origin' : 'http://localhost:3000',
            'Access-Control-Expose-Headers' : '',
            'Access-Control-Max-Age' : '1728000',
            Accept: "application/json",
            Authorization: `MAC id= ${apiInputKey}`,
            ts:"1560904875",
            nonce:"6774436",
            mac:"yZG89uWNth/jV6uEBHuiQe7UABGFxLd+TsXYLT1CMFk=",
            "Content-Type": "application/json"
          }
        })
          .then(res => {
            if (res.ok) {
              return res.json();
            } else {
              throw Error(res.statusText);
            }
          })
          .then(json => {
            this.setState({
              isLoaded: true,
              token: json
            });
          })
          .catch(error => console.error(error));
         
    }
    
    handleChange(event) {
      this.setState({apiKey: event.target.value});
    }

    handleChangeText(event) {
      this.setState({message: event.target.value});
    }

    handleChangeKey(event) {
      this.setState({apiInputKey: event.target.value,
                    apiSecretKey: event.target.value});
    }

    handleSubmit(event) {
      console.log("New key", this.state.apiKey);
      event.preventDefault();
      if(this.state.apiKey !== null) {
        this.setState({keyMessage: this.state.apiKey,
          KeyText: 'Added New Key: '}); 
      }
      else {
        this.setState({keyMessage: '',
          KeyText: ''});
      }
    }

    handleKeys(event) {
      event.preventDefault();

    }

    showSmsPage(event) {
      event.preventDefault();
      this.setState({showSmsPage: true,
                      showApiPage: false,
                      nextButton: false})
    }
    
  render () {
    return (
      <div className="App">
        <h3 className="App-header">Global SMS React Application</h3>
        <div className="App container">
            <hr></hr>
            <div className="row">
              <div className="col-xs col-sm col-md col-xs">
                {this.state.showApiPage?(<ApiStore value={this.state.apiKey} onchanged={this.handleChange} submit={this.handleSubmit}
              addedKey={this.state.keyMessage} keyText={this.state.KeyText} addKeyDetails={this.handleKeys}
              />):null}
              {this.state.nextButton ? (<InterfaceButton buttonClick={this.showSmsPage}></InterfaceButton>): null}
              <br />
              {this.state.showSmsPage ? (<SmsPage sendMessage={this.sendMessage} oncount={this.handleChangeText} messageCount={this.state.message.length}/>)
              : null}
              </div>
              <br />
              <div className="col-xs col-sm col-md col-xs">
              {this.state.toUser.length > 0 ? (<SmsReport fromUser={this.state.fromUser}
                        toUser={this.state.toUser}
                        message={this.state.message}/>  
              ): null}
              </div>
            </div>
        </div>
        <br />
      </div>
    );
  }
}

export default Main;

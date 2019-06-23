import React from 'react';
import SmsPage from './SmsPage';
import ApiStore from './ApiStore';
import SmsReport from './SmsReport';
import Navigation from './Navigation';
import App from '../App';
import { Route, IndexRoute } from 'react-router-dom';

const Router = () => (
    <div className="App">
        <h3 className="App-header">Global SMS React Application</h3>
        <div className="App container">
            <hr></hr>
            <div className="row">
              <div className="col-xs col-sm col-md col-xs">
              <Route >
                <Route exact path="/" component={ApiStore} />
                <Route path="/SmsPage" component={SmsPage} />
                <Route path="/SmsReport" component={SmsReport} />
              </Route>
              </div>
            </div>
        </div>
        <br />
    </div>
)

export default Router;
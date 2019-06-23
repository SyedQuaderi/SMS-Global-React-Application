import React from 'react';
import { Link } from 'react-router-dom';


const ApiStore = (props) => {

    return(
        <div>
            <form className="form-inline" onSubmit={props.submit}>
            <div className="form-group col-sm-3">
                <label className="col-sm-3 col-form-label">API</label>
            </div>
            <div className="form-group col-sm-6">
                <input type="text" className="form-control" onChange={props.onchanged} value={props.value} placeholder="Enter API Key" required/>
            </div>
                <button type="submit" className="btn btn-primary col-sm-3">Add Key</button>
            </form>
            {props.addedKey != null? (
                     <p>{props.keyText}{props.addedKey}</p>
                ): null}
            <br />
            <form onSubmit={props.addKeyDetails} >
            <div className="form-group row" >
                <label  className="col-sm-3 col-form-label">API Key</label>
                <div className="col-sm-9">
                <input type="text" className="form-control"  name="userName" placeholder="Enter API Key Input" required/>
                </div>
            </div>
            <div className="form-group row" >
                <label  className="col-sm-3 col-form-label">API Secret</label>
                <div className="col-sm-9">
                <input type="Password" className="form-control"  name="password" placeholder="Enter API Secret Input" required/>
                </div>
            </div>
            <div className="form-group row" >
                <label  className="col-sm-3 col-form-label">Display Name</label>
                <div className="col-sm-9">
                <input type="text" className="form-control"  name="password" placeholder="Enter Display Name" required/>
                </div>
            </div>
                <button type="submit" className="btn btn-primary col-sm-4">Add API Details</button>
            </form>
        </div>
    );

}

export default ApiStore;
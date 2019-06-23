import React from 'react';

const SmsPage = (props) => {

    return (
        <div>
            <h4 className="App-sms">Send SMS page</h4>
            <br />
            <form onSubmit={props.sendMessage} >
            <div className="form-group row" >
                <label  className="col-sm-3 col-form-label">From</label>
                <div className="col-sm-9">
                <input type="text" className="form-control"  name="fromUser" placeholder="From" required/>
                </div>
            </div>
            <div className="form-group row" >
                <label className="col-sm-3 col-form-label">To</label>
                <div className="col-sm-9">
                <input type="text" className="form-control"  name="toUser" placeholder="To" required/>
                </div>
            </div>
            <div className="form-group row" >
                <label  className="col-sm-3 col-form-label">Message</label>
                <div className="col-sm-9">
                <textarea type="text" className="form-control"  onChange={props.oncount} name="message" placeholder="Message"></textarea>
                {props.messageCount > 160 ? (<p>Multi-Message</p>):<p>Single Message(160)</p>}<p>Character Count: {props.messageCount}</p>
                </div>
            </div>
            <div>
             <button type="submit" className="col-sm-3 btn btn-primary">Send Message</button>
            </div>
            </form>
        </div>
    ); 
    
}

export default SmsPage;
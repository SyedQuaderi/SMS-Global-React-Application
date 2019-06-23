import React from 'react';

const SmsReport = (props) => {

    return (
        <div>
             <br />
            <h4 className="App-sms">SMS Report</h4>
            <hr></hr>
            <div className="sms-report">
                <p>From: {props.fromUser}</p>
                <p>To: {props.toUser}</p>
                <p>Message Content: {props.message}</p>
                <p>No. of Messages: {props.messageCount > 160 ? (<p>Multi-Message</p>):<p>Single Message</p>}</p>
            </div>
        </div>
    );
}

export default SmsReport;
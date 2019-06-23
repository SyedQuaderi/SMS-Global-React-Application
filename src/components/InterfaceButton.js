import React from 'react';

const InterfaceButton = (props) => {

    return (
        <div>
            <br />
            <button onClick={props.buttonClick} type="submit" className="btn btn-primary col-sm-3">SMS Page</button>
        </div>
        
    );
}

export default InterfaceButton;
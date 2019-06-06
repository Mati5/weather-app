import React from 'react';

import './Message.scss';

const message = (props) => {
    let message = '';
    let icon = '';
    let classType;

    switch(props.type) {
        case 'error':
            icon = <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>;
            message = <strong>Error message</strong> 
            classType = props.type;
        break;
        case 'success':
            icon = <i className="fa fa-check" aria-hidden="true"></i>;
            message = <strong>Success message</strong> 
            classType = props.type;
        break;
        default:
            icon = '';
            message = '';
            classType = 'default'
    }

    return (
        <div className={['message', 'message--' + classType].join(' ')}>
            <div className="message__icon">
                {icon}
        </div>
            <p>{message} {props.children}</p>
        </div>
    );
}

export default message;
import React from 'react';

import './Message.scss';
import Aux from '../../../hoc/Auxiliary';

const message = (props) => {
    let message = '';
    let icon = '';
    switch(props.type) {
        case 'error':
            icon = <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>;
            message = <strong>Error message</strong> 
        break;
        case 'success':
            icon = <i className="fa fa-check" aria-hidden="true"></i>;
            message = <strong>Success message</strong> 
        break;
        default:
            icon = '';
            message = props.children;
    }

    return (
        <Aux>
            <div className={['message', 'message--' + props.type].join(' ')}>
                <div className="message__icon">
                    {icon}
                </div>
                <p>{message} {props.children}</p>
            </div>
        </Aux>
    );
}

export default message;
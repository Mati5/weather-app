import React from 'react';

import './Button.scss';

const button = (props) => (
    <button 
        className={['button', 'button--' + props.btnType].join(' ')}
        onClick={props.clicked}
        disabled={props.disabled}>
        <i className={['fa', props.icon].join(' ')}></i>{props.children}
    </button>
);

export default button;
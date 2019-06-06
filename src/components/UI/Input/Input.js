import React, { Fragment } from 'react';

import './Input.scss';

const input = (props) => {
    let inputElement = null;
    let inputClasses = ['input', props.class];

    if(props.invalid && props.touched && props.inputValue.length>0) {
        inputClasses.push('input--invalid');
    }

    switch(props.elementType) {
        case 'input':
            inputElement = <input 
                                type={props.elementConfig.type}
                                id={props.id}
                                className={inputClasses.join(' ')}
                                placeholder={props.elementConfig.placeholder}
                                onChange={props.changed}
                                value={props.inputValue}
                                name={props.inputName}
                                checked={props.elementConfig.checked} />
        break;

        default:
            inputElement = <input 
                                type={props.elementConfig.type}
                                placeholder={props.elementConfig.placeholder}
                                onChange={props.changed}
                                value={props.inputValue}
                                name={props.inputName} />
        break;
    }

    return (
        <Fragment>
            {inputElement}
        </Fragment>
    );
}

export default input;
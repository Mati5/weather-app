import React from 'react';

import './Input.scss';
import Aux from '../../../hoc/Auxiliary';

const input = (props) => {
    let inputElement = null;
    let inputClasses = ['input', props.class];

    if(props.invalid && props.touched && props.inputValue.length>0) {
        inputClasses.push('invalid');
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
    }

    return (
        <Aux>
            {inputElement}
        </Aux>
    );
}

export default input;
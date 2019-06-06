import React, { Component } from 'react';
import { connect } from 'react-redux';

import './AddCityForm.scss';

import { addCity } from '../../store/actions/cities';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import { checkValidity } from '../../shared/utility';

export class AddCityForm extends Component {
    initialState = {
        addCityForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Name city'
                },
                value: '',
                validation: {
                    required: true,
                    isNotNumber: true
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false,
        validationMessage: ''
    }

    state = this.initialState;

    addCityHandler = (event) => {
        event.preventDefault();
        let formData = {};

        for(let formElementIdentifier in this.state.addCityForm) {
            formData[formElementIdentifier] = this.state.addCityForm[formElementIdentifier].value
        }
        
        this.props.addCity(formData.name);
        this.setState(this.initialState);
    }

    inputChangeHandler = (event, inputIdentifier) => {
        const updatedAddCityForm = { ...this.state.addCityForm };
        const updatedFormElement = { ...updatedAddCityForm[inputIdentifier] }
        let validity;

        updatedFormElement.value = event.target.value;
        validity = checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.valid = validity.isValid;
        updatedFormElement.touched = true;
        updatedAddCityForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for(let formElementIdentifier in updatedAddCityForm) {
            formIsValid = updatedAddCityForm[formElementIdentifier].valid && formIsValid;
        }

        this.setState({addCityForm: updatedAddCityForm, formIsValid: formIsValid, validationMessage: validity.message});
    }

    render() {
        const formElementArray = [];
        
        for(let key in this.state.addCityForm) {
            formElementArray.push({
                id: key,
                config: this.state.addCityForm[key]
            });
        }

        let form = (
            <form onSubmit={this.addCityHandler} className="add-form__form">
                    {formElementArray.map(element => (
                        <Input
                            key={element.id} 
                            inputValue={element.config.value}
                            elementType={element.config.elementType}
                            elementConfig={element.config.elementConfig}
                            invalid={!element.config.valid}
                            touched={element.config.touched}
                            changed={(event) => this.inputChangeHandler(event, element.id)} 
                            class="add-form__input" />
                            
                    ))}
                <Button
                    btnType={'add'} 
                    icon={'fa-search-plus'}
                    disabled={!this.state.formIsValid}>Dodaj</Button>
            </form>
        );

        let validationMessage = (
            <p className="validation-message">{this.state.validationMessage}</p>
        );

        return(
            <div className="add-form">
                {form}
                {this.state.validationMessage.length > 0 ? validationMessage : null }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cityList: state.weatherReducer.cityList
    };
};

const mapDispatchToProps = {
    addCity
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCityForm);
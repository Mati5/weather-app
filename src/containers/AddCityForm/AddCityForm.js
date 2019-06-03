import React, { Component } from 'react';
import { connect } from 'react-redux';

import './AddCityForm.scss';

import { addCity } from '../../store/actions/cities';

import Aux from '../../hoc/Auxiliary';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

class AddCityForm extends Component {
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
                    number: false
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

        // let isNotExisted = true;
        // for(let key in this.props.cityList) {
        //     if(this.props.cityList[key].city.name === formData.name ) {
        //       isNotExisted=false;
        //    }
        // }  

        // if(isNotExisted && this.state.formIsValid) {
            this.props.addCity(formData.name);
            this.setState(this.initialState);
        // }
    }

    inputChangeHandler = (event, inputIdentifier) => {
        const updatedAddCityForm = { ...this.state.addCityForm };
        const updatedFormElement = { ...updatedAddCityForm[inputIdentifier] }

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedAddCityForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for(let formElementIdentifier in updatedAddCityForm) {
            formIsValid = updatedAddCityForm[formElementIdentifier].valid && formIsValid;
        }

        this.setState({addCityForm: updatedAddCityForm, formIsValid: formIsValid});
    }

    checkValidity = (value, rules) => {
        let isValid = true;
        let message = '';

        if(rules.required) {
            isValid = value.trim() !== '' && isValid;

            if(value.trim() === '' && value.length>0) {
                message += 'Podano puste znaki.';
                this.setState({validationMessage: message});
            }
        }

        if(!rules.number) {
            const re = /^[\s\p{L}]+$/u;

            if(!re.test(value) && value.length>0) {
                message += 'Nazwa miasta nie może zawierać cyfr.';
                this.setState({validationMessage: message});
            }

            isValid = re.test(value) && isValid;
        }

        if(value.length === 0) {
            message = '';
            this.setState({validationMessage: message});
        }

        return isValid;
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
            <Aux>
                <div className="add-form">
                    {form}
                    {this.state.validationMessage.length > 0 ? validationMessage : null }
                </div>
            </Aux>
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
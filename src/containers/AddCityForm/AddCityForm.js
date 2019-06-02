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
        validationCommunicate: ''
    }

    state = this.initialState;

    addCityHandler = (event) => {
        event.preventDefault();
        let formData = {};

        for(let formElementIdentifier in this.state.addCityForm) {
            formData[formElementIdentifier] = this.state.addCityForm[formElementIdentifier].value
        }

        let isExisted = true;
        for(let key in this.props.cityList) {
            if(this.props.cityList[key].city.name === formData.name ) {
              isExisted=false;
           }
        }  

        if(isExisted && this.state.formIsValid) {
            this.props.addCity(formData.name);
            this.setState(this.initialState);
        }
        else {
            console.log("City existed");
        }
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
        let communicate = '';

        if(rules.required) {
            isValid = value.trim() !== '' && isValid;

            if(value.trim() === '' && value.length>0) {
                communicate += 'Podano puste znaki.';
                this.setState({validationCommunicate: communicate});
            }
        }

        if(!rules.number) {
            const re = /^[\s\p{L}]+$/u;

            if(!re.test(value) && value.length>0) {
                communicate += 'Nazwa miasta nie może zawierać cyfr.';
                this.setState({validationCommunicate: communicate});
            }

            isValid = re.test(value) && isValid;
        }

        if(value.length === 0) {
            communicate = '';
            this.setState({validationCommunicate: communicate});
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

        let validationCommunicate = (
            <p className="validationCommunicate">{this.state.validationCommunicate}</p>
        );

        return(
            <Aux>
                <div className="add-form">
                    {form}
                    {this.state.validationCommunicate.length > 0 ? validationCommunicate : null }
                </div>
                {/* { this.props.error ? this.props.error.message : null} */}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        cityList: state.weatherReducer.cityList,
        error: state.weatherReducer.error
    };
};

const mapDispatchToProps = {
    addCity
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCityForm);
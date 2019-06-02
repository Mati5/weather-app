import React, { Component } from 'react';
import { connect } from 'react-redux';

import history from '../../history';

import Aux from '../../hoc/Auxiliary';
import './Settings.scss';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import {changeUnitTemp} from '../../store/actions/settings';
import BottomBar from '../../components/Navigation/Bottombar/Bottombar';

class Settings extends Component {
    render() {
        return(
            <Aux>
                <div className="settings">
                    <h2 className="settings__title">Ustawienia</h2>
                    <div className="settings__content">
                        <ul className="settings__list">
                            <li className="settings__element">
                                <h3 className="settings__subtitle">Jednostka:</h3>
                                <div>
                                    <div>
                                        <Input 
                                            id="unit-c"
                                            elementType="input" 
                                            elementConfig={{ type: 'radio', checked: this.props.unitTemp === 'C' }} 
                                            inputValue="C" 
                                            inputName="temp"
                                            changed={() => this.props.changeUnitTemp("C")} />
                                        <label htmlFor="unit-c">C</label>
                                    </div>
                                    <div>
                                        <Input 
                                            id="unit-f"
                                            elementType="input" 
                                            elementConfig={{ type: 'radio', checked: this.props.unitTemp === 'F' }} 
                                            inputValue="F" 
                                            inputName="temp" 
                                            changed={() => this.props.changeUnitTemp("F")} />
                                        <label htmlFor="unit-f">F</label>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <BottomBar>
                    <Button
                        icon="fa-arrow-circle-left" 
                        clicked={() => history.push('/')}>Powrót</Button>
                </BottomBar>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        unitTemp: state.settingsReducer.unitTemp
    }
}

const mapDispatchToProps = {
    changeUnitTemp
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
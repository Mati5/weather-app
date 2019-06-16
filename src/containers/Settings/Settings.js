import React from 'react';
import { connect } from 'react-redux';

import history from '../../history';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import { changeUnitTemp } from '../../store/Settings/actions';
import './Settings.scss';

const Settings = ({unitTemp, changeUnitTemp}) => {
    return(
        <React.Fragment>
            <div className="settings">
                <div className="container">
                    <h2 className="settings__title">Ustawienia</h2>
                    <div className="settings__content">
                        <ul className="settings__list">
                            <li className="settings__element">
                                <h3 className="settings__subtitle">Jednostka:</h3>
                                <div className="settings__details">
                                    <div>
                                        <Input 
                                            id="unit-c"
                                            elementType="input" 
                                            elementConfig={{ type: 'radio', checked: unitTemp === 'C' }} 
                                            inputValue="C" 
                                            inputName="temp"
                                            changed={() => changeUnitTemp("C")} />
                                        <label htmlFor="unit-c">&deg;C</label>
                                    </div>
                                    <div>
                                        <Input 
                                            id="unit-f"
                                            elementType="input" 
                                            elementConfig={{ type: 'radio', checked: unitTemp === 'F' }} 
                                            inputValue="F" 
                                            inputName="temp" 
                                            changed={() => changeUnitTemp("F")} />
                                        <label htmlFor="unit-f">&deg;F</label>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Toolbar type="bottom">
                <Button
                    icon="fa-arrow-circle-left" 
                    clicked={() => history.goBack()}>Powrót</Button>
            </Toolbar>
        </React.Fragment>
    );
};

const mapStateToProps = state => ({
    unitTemp: state.settingsReducer.unitTemp
});

const mapDispatchToProps = {
    changeUnitTemp
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
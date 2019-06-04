import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { addCity, deleteCity, selectCity, setActionMessage } from '../../store/actions/cities';

import './Cities.scss';

import AddCityForm from '../AddCityForm/AddCityForm';
import Aux from '../../hoc/Auxiliary';
import Button from '../../components/UI/Button/Button';
import Message from '../../components/UI/Message/Message';

export class Cities extends Component {
    messageTimeout = () => {
       setTimeout(() => {
            this.props.setActionMessage(null);
        }, 4000);
    }

    render() {
        let cityList = this.props.cityList.map((city, index) => (
            <tr 
                key={city.city.id}
                className="cities__tr">
                <td className="cities__td">{index}</td>
                <td className="cities__td"><Link to={'/' + city.city.name}>{city.city.name}</Link></td>
                <td className="cities__td">{city.averageTemp}&deg;{this.props.unitTemp}</td>
                <td className="cities__td">
                    <Button 
                        btnType="danger"
                        clicked={() => this.props.deleteCity(city.city.id)}
                        icon="fa-minus-circle">Usuń</Button>
                </td>
            </tr>
        ));

        return(
            <Aux>
                <div className="container">
                    <AddCityForm />
                    <div className="cities">
                        <table className="cities__table">
                            <thead>
                                <tr className="cities__tr">
                                    <th className="cities__th">#</th>
                                    <th className="cities__th">Miasto</th>
                                    <th className="cities__th">Średnia progonozowana temeratura</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody> 
                                {cityList}
                            </tbody>
                        </table>
                    </div>
                </div>

                {this.props.message ? <Message show={true} type={this.props.message.type}>
                    {this.props.message.data.message}

                    {this.messageTimeout()}

                </Message> : null}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        cityList: state.weatherReducer.cityList,
        unitTemp: state.settingsReducer.unitTemp,
        message: state.weatherReducer.message
    };
};

const mapDispatchToProps = {
    addCity,
    deleteCity,
    selectCity,
    setActionMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
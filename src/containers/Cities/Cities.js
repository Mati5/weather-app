import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { addCity, deleteCity, selectCity } from '../../store/actions/cities';

import './Cities.scss';

import AddCityForm from '../AddCityForm/AddCityForm';
import Aux from '../../hoc/Auxiliary';
import Button from '../../components/UI/Button/Button';


class Cities extends Component {
    render() {
        let cityList = this.props.cityList.map((city, index) => (
            <tr 
                key={city.city.id}
                className="cities-table__tr">
                <td className="cities-table__td">{index}</td>
                <td className="cities-table__td"><Link to={'/' + city.city.name}>{city.city.name}</Link></td>
                <td className="cities-table__td">{city.averageTemp}</td>
                <td className="cities-table__td">
                    <Button 
                        btnType="danger"
                        clicked={() => this.props.deleteCity(city.city.id)}
                        icon="fa-minus-circle">Usuń</Button>
                </td>
            </tr>
        ));

        return(
            <Aux>
                <AddCityForm />
                <table className="cities-table">
                    <thead>
                        <tr className="cities-table__tr">
                            <th className="cities-table__th">#</th>
                            <th className="cities-table__th">Miasto</th>
                            <th className="cities-table__th">Średnia progonozowana temeratura</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody> 
                        {cityList}
                    </tbody>
                </table>
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
    addCity,
    deleteCity,
    selectCity
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
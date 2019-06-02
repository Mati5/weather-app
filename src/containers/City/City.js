import React, { Component } from 'react';
import { connect } from 'react-redux';

import history from '../../history';

import { selectCity, setSelectedCity } from '../../store/actions/cities';

import './City.scss';
import Aux from '../../hoc/Auxiliary';
import Button from '../../components/UI/Button/Button';
import BottomBar from '../../components/Navigation/Bottombar/Bottombar';

class City extends Component {
    componentDidMount() {
        this.props.selectCity(this.props.match.params.name); 
    }

    componentWillUnmount() {
        this.props.setSelectedCity(null);
    }

    render() {
        let city = <p>Nie ma takiego miasta na liście</p>
        if(this.props.selectedCity) {
            city = (
                <div className="city">  
                    <h2 className="city__title">{this.props.selectedCity.city.name}</h2>
                    <div className="city__content">
                        <ul className="details">
                            <li className="details__element">
                                <h3 className="details__title">Szerokość geograficzna:</h3>
                                {this.props.selectedCity.city.coord.lat}
                            </li>
                            <li className="details__element">
                                <h3 className="details__title">Długość geograficzna:</h3>
                                {this.props.selectedCity.city.coord.lon}
                            </li>
                            <li className="details__element">
                                <h3 className="details__title">Średnia temperatura:</h3>
                                {this.props.selectedCity.averageTemp}
                            </li>
                        </ul>
                    </div>
                </div>
            );
        }

        return (
            <Aux>
                {city}
            
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
        selectedCity: state.weatherReducer.selectedCity
    }
}

const mapDispatchToProps = {
    selectCity,
    setSelectedCity
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
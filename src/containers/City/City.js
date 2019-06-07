import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import history from '../../history';
import { selectCity, setSelectedCity } from '../../store/Cities/actions';
import Button from '../../components/UI/Button/Button';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import './City.scss';

const City = ({selectCity, setSelectedCity, selectedCity, unitTemp, match}) => {
    useEffect(() => {
        selectCity(match.params.name); 

        return () => {
            setSelectedCity(null);
        };
      }, [selectCity, setSelectedCity]);

    let city = <p>Nie ma takiego miasta na liście</p>;

    if(selectedCity) {
        city = (
            <div className="city">  
                <h2 className="city__title">{selectedCity.city.name}</h2>
                <div className="city__content">
                    <ul className="details">
                        <li className="details__element">
                            <h3 className="details__title">Szerokość geograficzna:</h3>
                            {selectedCity.city.coord.lat}
                        </li>
                        <li className="details__element">
                            <h3 className="details__title">Długość geograficzna:</h3>
                            {selectedCity.city.coord.lon}
                        </li>
                        <li className="details__element">
                            <h3 className="details__title">Średnia temperatura:</h3>
                            {selectedCity.averageTemp}&deg;{unitTemp}
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

    return(
        <React.Fragment>
            <div className="container">
                {city}
            </div>
            <Toolbar type="bottom">
                <Button
                    icon="fa-arrow-circle-left" 
                    clicked={() => history.push('/')}>Powrót</Button>
            </Toolbar>
        </React.Fragment>
    );
};

const mapStateToProps = state => ({
    selectedCity: state.citiesReducer.selectedCity,
    unitTemp: state.settingsReducer.unitTemp
});

const mapDispatchToProps = {
    selectCity,
    setSelectedCity
};

export default connect(mapStateToProps, mapDispatchToProps)(City);
export {City};
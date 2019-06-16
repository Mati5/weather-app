import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { deleteCity, setActionMessage } from '../../store/Cities/actions';
import AddCityForm from '../AddCityForm/AddCityForm';
import Button from '../../components/UI/Button/Button';
import Message from '../../components/UI/Message/Message';
import './Cities.scss';

const Cities = ({ deleteCity, setActionMessage, cityList, unitTemp, message}) => {
    const messageTimeout = () => {
        setTimeout(() => {
             setActionMessage(null);
         }, 4000);
     }

    let cityListRows = cityList.map((city, index) => (
        <tr 
            key={city.city.id}
            className="cities__tr">
            <td className="cities__td">{index+1}</td>
            <td className="cities__td"><Link to={'/' + city.city.name}>{city.city.name}</Link></td>
            <td className="cities__td">{city.averageTemp}&deg;{unitTemp}</td>
            <td className="cities__td">
                <Button 
                    btnType="danger"
                    clicked={() => deleteCity(city.city.id)}
                    icon="fa-minus-circle">Usuń</Button>
            </td>
        </tr>
    ));

    return(
        <React.Fragment>
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
                            {cityListRows}
                        </tbody>
                    </table>
                </div>
            </div>

            {message ? <Message type={message.type}>
                {message.data.message}
                {messageTimeout()}
            </Message> : null}
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    cityList: state.citiesReducer.cityList,
    unitTemp: state.settingsReducer.unitTemp,
    message: state.citiesReducer.message
});

const mapDispatchToProps = {
    deleteCity,
    setActionMessage
};


export default connect(mapStateToProps, mapDispatchToProps)(Cities);
export { Cities };
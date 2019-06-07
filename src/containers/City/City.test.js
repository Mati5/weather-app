import React from 'react';
import { shallow } from 'enzyme';

import { City } from './City';

describe('<City />', () => {
    let props;

    beforeEach(() => {
        props =  {
            match: { params: { name: 'test' }},
            selectedCity: {
                averageTemp: "20.1",
                city: {id: 7530819, name: "Rzeszów", coord: {lat: 50.0375, lon: 22.0047}, country: "PL", timezone: 7200},
                coord: {lat: 50.0375, lon: 22.0047},
                country: "PL",
                id: 7530819,
                name: "Rzeszów",
                timezone: 7200
            }
        }
      })

    it('Should display selected city when received selectedCity', () => {
        const wrapper = shallow(<City  selectedCity={props.selectedCity} />);

        expect(wrapper.find('h2.city__title').text()).toEqual('Rzeszów');
        expect(wrapper.find('li.details__element')).toHaveLength(3);
        expect(wrapper.find('li.details__element').at(0).text()).toEqual('Szerokość geograficzna:50.0375');
        expect(wrapper.find('li.details__element').at(1).text()).toEqual('Długość geograficzna:22.0047');
        expect(wrapper.find('li.details__element').at(2).text()).toEqual('Średnia temperatura:20.1°');
    });

    it('Should display city not found when not received selectedCity', () => {
        const wrapper = shallow(<City selectCity={() => {}} {...props} selectedCity={null} />);
            expect(wrapper.find('p').text()).toEqual('Nie ma takiego miasta na liście');
    });
});
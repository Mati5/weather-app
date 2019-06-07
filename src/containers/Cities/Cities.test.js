import React from 'react';
import { BrowserRouter as Router  } from 'react-router-dom';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import store from '../../store/index';
import { Cities } from './Cities';

describe('<City />', () => {
    let props;

    beforeEach(() => {
        props =  {
            cityList: [
                { 
                    city: { 
                        city: {id: 7530819, name: "Rzeszów", coord: {lat: 50.0375, lon: 22.0047}, country: "PL", timezone: 7200},
                        coord: {lat: 50.0375, lon: 22.0047},
                        country: "PL",
                        id: 7530819,
                        name: "Rzeszów",
                        timezone: 7200
                    },
                    averageTemp: "20.1",
                 }
            ]
        
        }
      })

    it('Should display cities list', () => {
        const wrapper = shallow(<Cities {...props} />);

       expect(wrapper.find('table')).toHaveLength(1);
       expect(wrapper.find('tr')).toHaveLength(2);
    });
});
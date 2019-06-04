import React from 'react';
import { BrowserRouter as Router  } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import store from '../../store/store';
import { Cities } from './Cities';

configure({adapter: new Adapter()});

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
        const wrapper = mount(<Provider store={store}><Router><Cities {...props} /></Router></Provider>);

       expect(wrapper.find('table')).toHaveLength(1);
       expect(wrapper.find('tr')).toHaveLength(2);
    });
});
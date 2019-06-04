import React from 'react';
import { Provider } from "react-redux";
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from '../../store/store';

import {AddCityForm} from './AddCityForm';

configure({adapter: new Adapter()});

describe('<AddCityForm />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <Provider store={store}>
                <AddCityForm />
            </Provider>
        );
    });

    it('Should render form without error', () => {
        expect(wrapper.find('.add-form')).toHaveLength(1);
    })

    it('Should redner validationMessage when receiving validationMessage', () => {
        wrapper.find(AddCityForm).setState({ validationMessage: 'Example message' }, () => {
            wrapper.update();
            const validationMessage = wrapper.find('.validation-message');
            expect(validationMessage.exists()).toEqual(true);
            expect(validationMessage.text()).toEqual('Example message');
          });
    });

    it('Should button disabled', () => {
        wrapper.find(AddCityForm).setState({ formIsValid: false }, () => {
            wrapper.update();
            const button = wrapper.find('.button--add');
           
            expect(button.prop('disabled')).toEqual(true);
          });
    });
});
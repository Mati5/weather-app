import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import store from '../../store/index';
import Settings from './Settings';
import Input from '../../components/UI/Input/Input';

describe('<Settings />', () => {
    it('Should render two <Input />', () => {
        const wrapper = mount(<Provider store={store}><Settings /></Provider>);
        expect(wrapper.find(Input)).toHaveLength(2);
    });
});
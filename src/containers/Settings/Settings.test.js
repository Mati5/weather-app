import React from 'react';
import { Provider } from 'react-redux';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import store from '../../store/store';
import Settings from './Settings';
import Input from '../../components/UI/Input/Input';

configure({adapter: new Adapter()});

describe('<Settings />', () => {
    it('Should render two <Input />', () => {
        const wrapper = mount(<Provider store={store}><Settings /></Provider>);
        expect(wrapper.find(Input)).toHaveLength(2);
    });
});
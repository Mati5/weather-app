import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from './Button';

configure({adapter: new Adapter()});

describe('<Button />', () => {
    it('Should render button with text and icon', () => {
        const wrapper = shallow(<Button btnType="primary" disabled={false}>Click here</Button>);

        wrapper.setProps({icon: 'test-icon'});

        const button = wrapper.find('button');

        expect(button).toHaveLength(1);
        expect(button.text()).toEqual('Click here');
        expect(button.prop('disabled')).toEqual(false);
        expect(button.prop('className')).toEqual('button button--primary');
        expect(button.find('i').prop('className')).toEqual('fa test-icon');
    });
});
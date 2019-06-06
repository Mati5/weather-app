import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

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
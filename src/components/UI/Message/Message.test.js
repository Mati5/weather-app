import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Message from './Message';

configure({adapter: new Adapter()});

describe('<Message />', () => {
    let wrapper;
    let message;

    it('Should render error message', () => {
        wrapper = shallow(<Message type="error">Invalid data!</Message>);
        message = wrapper.find('.message');
        expect(message).toHaveLength(1);
        expect(message.prop('className')).toEqual('message message--error');
        expect(message.find('i').prop('className')).toEqual('fa fa-exclamation-triangle');

        expect(message.find('p').text()).toEqual('Error message Invalid data!');
    });

    it('Should render success message', () => {
        wrapper = shallow(<Message type="success">Valid data!</Message>);
        message = wrapper.find('.message');
        expect(message).toHaveLength(1);
        expect(message.prop('className')).toEqual('message message--success');
        expect(message.find('i').prop('className')).toEqual('fa fa-check');

        expect(message.find('p').text()).toEqual('Success message Valid data!');
    });

    it('Should render default message', () => {
        wrapper = shallow(<Message>Default data!</Message>);
        message = wrapper.find('.message');
        expect(message).toHaveLength(1);
        expect(message.prop('className')).toEqual('message message--default');
        expect(message.find('i').exists()).toEqual(false);

        expect(message.find('p').text()).toEqual(' Default data!');
    });
});
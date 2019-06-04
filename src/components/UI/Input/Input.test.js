import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import Input from './Input';

configure({adapter: new Adapter()});


describe('<Input />', ()=> {
    it('Should render text input', () => {
        const wrapper = shallow(<Input 
                                    id={2123} 
                                    elementType={'input'}
                                    inputValue={'Opole'} 
                                    elementConfig={{type: 'text', placeholder: 'Name city'}} 
                                    inputName={'name'} 
                                    class={'input-class'} />);

        const input = wrapper.find('input');

        expect(input).toHaveLength(1);
        expect(input.prop('type')).toEqual('text');
        expect(input.prop('placeholder')).toEqual('Name city');
        expect(input.prop('value')).toEqual('Opole');
        expect(input.prop('name')).toEqual('name');
        expect(input.prop('className')).toEqual('input input-class');
        expect(input.prop('id')).toEqual(2123);
    });
});
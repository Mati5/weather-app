import React from 'react';
import { shallow } from 'enzyme';

import Input from './Input';

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
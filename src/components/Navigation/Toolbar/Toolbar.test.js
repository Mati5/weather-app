import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Toolbar from './Toolbar';
import Button from '../../UI/Button/Button';

configure({adapter: new Adapter()});

describe('<Toolbar />', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<Toolbar />);
    });
    
    it('should render one <Button />', () => {
        const button = <Button />
        wrapper.setProps({children: button});
        expect(wrapper.find(Button)).toHaveLength(1);
    });

    it('Should render top toolbar', () => {
        wrapper.setProps({type: 'top'});
        expect(wrapper.find('.app-toolbar--top')).toHaveLength(1);
    });

    it('Should render bottom toolbar', () => {
        wrapper.setProps({type: 'bottom'});
        expect(wrapper.find('.app-toolbar--bottom')).toHaveLength(1);
    });
});
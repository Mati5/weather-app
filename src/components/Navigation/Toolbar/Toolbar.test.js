import React from 'react';
import { shallow } from 'enzyme';

import Toolbar from './Toolbar';
import Button from '../../UI/Button/Button';

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
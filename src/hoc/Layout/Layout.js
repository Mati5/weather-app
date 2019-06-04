import React, { Component } from 'react';

import history from '../../history';
import './Layout.scss';
import Aux from '../Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Button from '../../components/UI/Button/Button';

class Layout extends Component {
    
    render() {
        return(
            <Aux>
                <Toolbar type="top">
                    <Button 
                    btnType="primary"
                    icon="fa-cog"
                    clicked={() => history.location.pathname !== '/settings' ? history.push('/settings') : null}>Ustawienia</Button>
                </Toolbar>
                <main className="app-content">
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;
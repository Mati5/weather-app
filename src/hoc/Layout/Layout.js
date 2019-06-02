import React, { Component } from 'react';

import './Layout.scss';
import Aux from '../Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component {
    
    render() {
        return(
            <Aux>
                <Toolbar navigation={this.props.navigation} />
                <main className="app-content">
                    <div className="container">
                        {this.props.children}
                    </div>
                </main>
            </Aux>
        );
    }
}

export default Layout;
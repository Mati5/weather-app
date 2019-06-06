import React, { Fragment } from 'react';

import history from '../../history';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Button from '../../components/UI/Button/Button';
import './Layout.scss';

const Layout = (props) => (
    <Fragment>
        <Toolbar type="top">
            <Button 
                btnType="primary"
                icon="fa-cog"
                clicked={() => history.location.pathname !== '/settings' ? history.push('/settings') : null}>Ustawienia</Button>
        </Toolbar>
            <main className="app-content">
                {props.children}
            </main>
    </Fragment>
);

export default Layout;
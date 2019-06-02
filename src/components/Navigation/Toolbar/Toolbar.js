import React from 'react';

import history from '../../../history';

import './Toolbar.scss';
import Button from '../../UI/Button/Button';

const toolbar = (props) => (
    <header className="app-toolbar">
        <div className="app-toolbar__container">
            <Button 
                btnType="primary"
                icon="fa-cog"
                clicked={() => history.push('/settings')}>Ustawienia</Button>
        </div>
    </header>
);

export default toolbar;
import React from 'react';
import './Toolbar.scss';

const toolbar = (props) => (
    <div className={['app-toolbar', 'app-toolbar--' + props.type].join(' ')}>
        <div className="app-toolbar__container">
            {props.children}
        </div>
    </div>
);

export default toolbar;
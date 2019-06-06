import React from 'react';

import './Toolbar.scss';

const Toolbar = (props) => (
    <div className={['app-toolbar', 'app-toolbar--' + props.type].join(' ')}>
        <div className="app-toolbar__container">
            {props.children}
        </div>
    </div>
);

export default Toolbar;
import React from 'react';

import './Bottombar.scss';

const bottomBar = (props) => (
    <div className="app-bottombar">
        {props.children}
    </div>
); 

export default bottomBar;
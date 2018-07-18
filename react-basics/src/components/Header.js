import React from 'react';

import classes from '../css/styles.css';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>logo</div>
            <input type="text" onChange={props.keywords} />
        </header>
    );
}

export default Header;
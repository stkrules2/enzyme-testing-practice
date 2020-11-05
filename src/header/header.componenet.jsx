import React from 'react';

import './header.styles.scss';

const Header = (props) => (
    <header data-test='headerComponent'>
        <div className='container'>
            <div className='logo'>
                <img data-test='logoImg' src='https://raw.githubusercontent.com/jalbertsr/logo-badge-images/master/img/react_logo.png' alt='logo' />
            </div>
        </div>
    </header>
)

export default Header;
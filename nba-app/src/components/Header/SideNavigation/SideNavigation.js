import React from 'react';
import SideNav from 'react-simple-sidenav';

import SideNavigationItems from './SideNavigationItems';

const SideNavigation = (props) => {
  return (
    <div>
      <SideNav
        showNav={props.showNav}
        onHideNav={props.onHideNav}
        navStyle={{
          background: '#242424',
          maxWidth: '220px',
        }}
      >
        <SideNavigationItems />
      </SideNav>
    </div>
  )
}

export default SideNavigation;
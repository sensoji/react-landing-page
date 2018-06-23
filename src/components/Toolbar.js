import React from 'react';
import DrawerToggleButton from './DrawerToggleButton';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar-navigation">
      <div className="toolbar-toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
      <div className="toolbar-logo"><a href="/">LOGO</a></div>
      <div className="spacer"></div>
      <div className="toolbar-navigation-items">
        <ul>
          <li><a href="/">Services</a></li>
          <li><a href="/">Prodcuts</a></li>
          <li><a href="/">Users</a></li>
          <li className="sign-up"><a href="/">SIGN UP</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;

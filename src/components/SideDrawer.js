import React from 'react';

import Octocat from '../Octocat2.png';
import Flogo from '../flogo2.png';
import Tlogo from '../Tlogo2.png';

const sideDrawer = props => (
  <nav className="side-drawer">
    <ul>
      <li><a href="/">Services</a></li>
      <li><a href="/">Prodcuts</a></li>
      <li><a href="/">Users</a></li>
      <li className="sign-up"><a href="/">SIGN UP</a></li>
      <li className="spacer"></li>
      <li>
        <a onClick={ ()=> window.open('http://www.github.com')}>
          <img src={Octocat} alt="github link" />
        </a>
      </li>
      <li>
        <a onClick={ ()=> window.open('http://www.facebook.com')}>
          <img src={Flogo} alt="facebook link" />
        </a>
      </li>
      <li>
        <a onClick={ ()=> window.open('http://www.twitter.com')}>
          <img src={Tlogo} alt="twitter link" />
        </a>
      </li>
    </ul>
  </nav>
);

export default sideDrawer;

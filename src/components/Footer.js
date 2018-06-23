import React from 'react';
import Octocat from '../Octocat.png';
import Flogo from '../flogo.png';
import Tlogo from '../Tlogo.png';

const footer = props => (
  <div className="footer">
    <p>
      <a onClick={ ()=> window.open('https://github.com/sensoji/react-landing-page')}>
        <img src={Octocat} alt="github link" />
      </a>
      <a onClick={ ()=> window.open('http://www.facebook.com')}>
        <img src={Flogo} alt="facebook link" />
      </a>
      <a onClick={ ()=> window.open('http://www.twitter.com')}>
        <img src={Tlogo} alt="twitter link" />
      </a>
    </p>
  </div>
);

export default footer;

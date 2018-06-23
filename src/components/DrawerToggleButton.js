import React from 'react';

const drawerToggleButton = props => (
  <button className="toggle-button" onClick={props.click}>
    {/* Below div for fixing firefox flexbox button rendering issue */}
    <div className="toggle-button">
      <div className="toggle-button-line"/>
      <div className="toggle-button-line"/>
      <div className="toggle-button-line"/>
  </div>
  </button>
);

export default drawerToggleButton

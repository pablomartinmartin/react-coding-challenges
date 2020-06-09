import React, { useState } from 'react';
import '../styles/_launchpad.scss';

export default function LaunchPad({Rocket}) {
  const [rerenderCount, triggerRerender] = useState(0);
    
  function launchRocket () {
    triggerRerender(Date.now());
  }

  return (
    <div className="launchpad">
      <button onClick={launchRocket}> Launch Rocket</button>
      <Rocket />
    </div>
  );
}

import React from 'react';

function Heading() {
  console.log('Rendering Heading');
  return <h2>React.memo Example</h2>;
}

export default React.memo(Heading);

//without React.memo
//export default Heading;

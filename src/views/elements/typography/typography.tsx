import React, { useCallback } from 'react';

function Heading({level, children}) {

  const heading = useCallback(() => {
    switch (level) {
      case 1: return <h1>{children}</h1>;
      case 2: return <h2>{children}</h2>;
      case 3: return <h3>{children}</h3>;
      case 4: return <h4>{children}</h4>;
      case 5: return <h5>{children}</h5>;
    }
  },[])
  return heading()
}

export default Heading;

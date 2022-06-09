import React from 'react';
import { IconBlackArrowDown } from "@icons";

const Filter = ({ callback }: { callback?: any }) => {
  return (
    <div>
      <div>Filter</div>
      <div>
        <h3>All projects</h3>
        <button><IconBlackArrowDown/></button>
      </div>
    </div>
  );
};

export default Filter;

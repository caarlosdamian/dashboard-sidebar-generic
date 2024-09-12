import React from 'react';
import { useSidebarContext } from '../../context/sidebar/sidebarContext';

export const Header = () => {
  const { toggle } = useSidebarContext();
  return (
    <header>
      <button onClick={toggle}>Prueba</button>
    </header>
  );
};

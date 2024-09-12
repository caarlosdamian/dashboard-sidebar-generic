import { NavLink } from 'react-router-dom';
import { SidebarLinksI } from '../../types';
import React from 'react';

export const SidebarLink = ({ icon, label, path }: SidebarLinksI) => {
  const iconClone = React.isValidElement(icon) ? (
    React.cloneElement(icon as React.ReactElement<{ size?: number }>, {
      size: 24,
    })
  ) : (
    <></>
  );

  return (
    <NavLink
      to={path}
      className={({ isActive }) => {
        const defaultStyles = 'flex gap-6 items-center text-base py-4 cursor-pointer  ';
        return defaultStyles.concat(
          isActive ? 'text-[#FF5151] font-medium' : 'text-[#686868] font-normal'
        );
      }}
    >
      {iconClone} <span className="hidden lg:block">{label}</span>
    </NavLink>
  );
};

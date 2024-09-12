import { SidebarLinkI } from '../../types';
import { SidebarLink } from '../sidebarLink/SidebarLink';

export const SidebarSection = ({ links, title }: SidebarLinkI) => {
  return (
    <li className='flex items-center lg:items-start flex-col'>
      <p className="py-[10px] uppercase text-[#686868] text-[10px] lg:text-xs font-medium">{title}</p>
      <ul>
        {links.map(({ icon, label, path }) => (
          <li key={path}>
            <SidebarLink label={label} path={path} icon={icon} />
          </li>
        ))}
      </ul>
    </li>
  );
};

import { sidebarLinks } from '../../utils/sidebarLinks';
import { SidebarSection } from '../sidebarSection/Sidebarsection';

export const Sidebar = () => {
  return (
    <aside className="min-w-[90px] px-3 lg:px-[30px] pt-10 bg-primary-gray lg:min-w-[242px]">
      {/* Logo */}
      <h1 className="text-black font-bold">Logo</h1>
      <ul className='flex flex-col gap-14'>
        {sidebarLinks.map(({ links, title }) => (
          <SidebarSection key={title} title={title} links={links} />
        ))}
      </ul>
    </aside>
  );
};

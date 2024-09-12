import { sidebarLinks } from '../../utils/sidebarLinks';
import { SidebarSection } from '../sidebarSection/SidebarSection';
import { useSidebarContext } from '../../context/sidebar/sidebarContext';

export const Sidebar = () => {
  const { showSidebar } = useSidebarContext();
  return (
    <aside
      className={`min-w-[90px] px-3 lg:px-[30px] pt-10 bg-primary-gray lg:min-w-[242px] transition-all duration-100	ease-in-out  ${
        showSidebar ? 'relative left-0' : 'absolute -left-full'
      }`}
    >
      {/* Logo */}
      <h1 className="text-black font-bold">Logo</h1>
      <ul className="flex flex-col gap-14">
        {sidebarLinks.map(({ links, title }) => (
          <SidebarSection key={title} title={title} links={links} />
        ))}
      </ul>
    </aside>
  );
};

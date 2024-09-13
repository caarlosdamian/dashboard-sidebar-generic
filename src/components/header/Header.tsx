import { RiMenuFill } from 'react-icons/ri';

import { useSidebarContext } from '../../context/sidebar/sidebarContext';

export const Header = () => {
  const { toggle } = useSidebarContext();
  return (
    <header className="border-b-[1px] border-[#F1F1F1] px-5 py-6 sm:max-lg:py-3">
      <RiMenuFill size={24} onClick={toggle} className='cursor-pointer' />
    </header>
  );
};

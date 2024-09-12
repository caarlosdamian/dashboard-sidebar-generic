import { createContext, PropsWithChildren, useContext, useState } from 'react';

interface SidebarContext {
  showSidebar: boolean;
  toggle: () => void;
}

const sidebarContext = createContext<SidebarContext>({
  showSidebar: false,
  toggle: () => null,
});
sidebarContext.displayName = 'Sidebar Context'

const SidebarContextProvider = ({ children }: PropsWithChildren) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggle = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <sidebarContext.Provider value={{ showSidebar, toggle }}>
      {children}
    </sidebarContext.Provider>
  );
};

const useSidebarContext = () => {
  const context = useContext(sidebarContext);
  if (!context) throw Error('Please add context provider');
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { useSidebarContext, SidebarContextProvider };

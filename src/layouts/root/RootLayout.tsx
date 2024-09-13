import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { SidebarContextProvider } from '../../context/sidebar/sidebarContext';
import { Header } from '../../components/header/header';

export const RootLayout = () => {
  return (
    <main className="flex h-screen w-screen font-poppins">
      <SidebarContextProvider>
        <Sidebar />
        <section className="basis-full bg-white lg:px-14">
          <Header />
          <Outlet />
        </section>
      </SidebarContextProvider>
    </main>
  );
};

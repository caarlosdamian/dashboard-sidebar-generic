import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../components/sidebar/Sidebar';

export const RootLayout = () => {
  return (
    <main className="flex h-screen w-screen font-poppins">
      <Sidebar />
      <section className="basis-full bg-white">
        <header></header>
        <Outlet />
      </section>
    </main>
  );
};

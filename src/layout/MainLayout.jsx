import { Outlet } from 'react-router-dom';
import Header from './Navbar';
import Footer from './Footer';

export default function MainLayout() {
  return (
    <div>
      <Header />
      <div className=" flex    flex-nowrap justify-start  transition-[padding] duration-200 p-0">
        <div className=" w-full">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

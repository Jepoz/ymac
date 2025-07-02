import { Outlet } from 'react-router-dom'
import Header from '../../ui/header/header';
import Footer from '../../ui/footer/footer';
import SubHeader from '../sub-header/sub-header';

const Layout = () => {
  return (
    <div className="app">
      <SubHeader/>
      <Header />
      <main>
        <Outlet /> {/* Aquí se renderizan las páginas */}
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
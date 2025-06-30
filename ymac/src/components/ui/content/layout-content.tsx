import { Outlet } from 'react-router-dom'
import Header from '../../ui/header/header';
import Footer from '../../ui/footer/footer';

const Layout = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Outlet /> {/* Aquí se renderizan las páginas */}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
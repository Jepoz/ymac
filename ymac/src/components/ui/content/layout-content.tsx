import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom'
import Header from '../../ui/header/header';
import Footer from '../../ui/footer/footer';
import SubHeader from '../sub-header/sub-header';
import { ScrollProvider } from '../../../context/scroll-context'

const Layout = () => {
  return (
    <ScrollProvider>
      <div className="app">
        <SubHeader/>
        <Header/>
        <main>
          <Outlet /> {/* Aquí se renderizan las páginas */}
        </main>
        {/* <Footer /> */}
      </div>
    </ScrollProvider>
  )
}

export default Layout
import { Outlet } from 'react-router-dom'
import Header from '../../ui/header/header';
import SubHeader from '../sub-header/sub-header';
import { ScrollProvider } from '../../../context/scroll-context'

const Layout = () => {
  return (
    <ScrollProvider>
      <div className="app">
        <SubHeader/>
        <Header/>
        <main>
          <Outlet />
        </main>        
      </div>
    </ScrollProvider>
  )
}

export default Layout
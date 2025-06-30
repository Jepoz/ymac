import { Routes, Route } from 'react-router-dom'
// import Products from '../pages/product'
// import Contact from '../pages/contact'
import Home from '../pages/home'
import Layout from '../components/ui/content/layout-content'


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="productos" element={<Products />} />
        <Route path="contacto" element={<Contact />} /> */}
      </Route>
    </Routes>
  )
}

export default AppRoutes
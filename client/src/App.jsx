import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './pages/Home/Home'
import Hire from "./pages/hire/Hire"
import Work from './pages/work/Work'
import Contact from './pages/contact/Contact'

import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/about/about.jsx'
import Footer from './components/footer/Footer.jsx'
function App() {
 

  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/work" element={<Work/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/hire" element={<Hire/>}></Route>
      <Route path='/footer' element={<Footer/>}></Route>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App

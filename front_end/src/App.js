import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './component/Header/Header';
import Contact from './page/General/Contact/Contact';
import Footer from './component/Footer/Footer';
import AACBlock from './page/General/Product/AACBlock';
import Blogs from './page/General/Blogs/Blogs';
import About from './page/General/About/About';
import { Route, Routes } from 'react-router-dom';
import AACPanel from './page/General/Product/AACPanel';
import LandingPage from './page/General/Home/LandingPage';
import Login from './page/Admin/Login/Login';
import PageLayout from './page/Layout/PageLayout';
import DashBoard from './page/Admin/Dashboard/DashBoard';
import AdminLayout from './page/Layout/AdminLayout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PageLayout />} >
          <Route path='/' element={<LandingPage />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/aac-blocks' element={<AACBlock />} />
          <Route path='/aac-panels' element={<AACPanel />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/about-us' element={<About />} />
        </Route>

        <Route path='/great-wall' element={<Login />} />
        <Route element={<AdminLayout />}>
          <Route path='/dashboard' element={<DashBoard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

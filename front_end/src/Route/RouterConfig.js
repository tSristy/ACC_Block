import {
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';

import Contact from '../page/General/Contact/Contact';
import AACBlock from '../page/General/Product/AACBlock';
import Blogs from '../page/General/Blogs/Blogs';
import About from '../page/General/About/About';
import AACPanel from '../page/General/Product/AACPanel';
import LandingPage from '../page/General/Home/LandingPage';
import Login from '../page/Admin/Login/Login';
import PageLayout from '../page/Layout/PageLayout';
import DashBoard from '../page/Admin/Dashboard/DashBoard';
import AdminLayout from '../page/Layout/AdminLayout';
import { ServerApi } from './ServerApi';
import { useEffect, useState } from 'react';
import ProtectedRoute from './ProtectedRoute';
import ImgSettings from '../page/Admin/ImgSettings/ImgSettings';
import Content from '../page/Admin/Content/Content';
import Profile from '../page/Admin/Profile/Profile';
import AACBlockTechnical from '../page/General/Technical/AACBlockTechnical';
import AACPanelTechnical from '../page/General/Technical/AACPanelTechnical';
import AACBlockGuide from '../page/General/Guideline/AACBlockGuide';
import AACPanelGuide from '../page/General/Guideline/AACPanelGuide';

const RouterConfig = () => {
  return (
    <Routes>
      <Route element={<PageLayout />} >
        <Route path='/' element={<LandingPage />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/product/aac-blocks' element={<AACBlock />} />
        <Route path='/product/aac-panels' element={<AACPanel />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/technical-specification/aac-blocks' element={<AACBlockTechnical />} />
        <Route path='/technical-specification/aac-panels' element={<AACPanelTechnical />} />
        <Route path='/technical-specification/aac-blocks' element={<AACBlockTechnical />} />
        <Route path='/guideline/aac-blocks' element={<AACBlockGuide />} />
        <Route path='/guideline/aac-panels' element={<AACPanelGuide />} />
        <Route path='/about-us' element={<About />} />
      </Route>

      <Route path='/great-wall' element={<Login />} />

      <Route element={<AdminLayout />}>
        <Route path='/dashboard' element={
          <ProtectedRoute>
            <DashBoard />
          </ProtectedRoute>
        } />

        <Route path='/banners-slides' element={
          <ProtectedRoute>
            <ImgSettings />
          </ProtectedRoute>
        } />

        {/* <Route path='/pages-settings' element={
          <ProtectedRoute>
            <DashBoard />
          </ProtectedRoute>
        } /> */}

        <Route path='/blogs-articles' element={
          <ProtectedRoute>
            <Content />
          </ProtectedRoute>
        } />

        <Route path='/profile' element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />
      </Route>

      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
};

export default RouterConfig;
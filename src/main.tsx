import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import Privacy from './pages/Privacy.tsx';
import Terms from './pages/Terms.tsx';
import Process from './pages/Process.tsx';
import AdminStrategy from './pages/AdminStrategy.tsx';
import ServicePage from './pages/ServicePage.tsx';
import CategoryPage from './pages/CategoryPage.tsx'; // Import the new CategoryPage
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/process" element={<Process />} />
        <Route path="/admin/strategy" element={<AdminStrategy />} />
        
        {/* L2: Category Pages */}
        <Route path="/:serviceCategory" element={<CategoryPage />} />
        
        {/* L3: Deep Service Pages */}
        <Route path="/:serviceCategory/:serviceType" element={<ServicePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

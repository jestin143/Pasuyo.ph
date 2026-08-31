import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import CustomerPage from './customer/CustomerPage.jsx'
import CustomerRegisterPage from './customer/CustomerRegisterPage.jsx'
import RiderPage from './rider/RiderPage.jsx'
import RiderRegisterPage from './rider/RiderRegisterPage.jsx'
import StorePage from './store/StorePage.jsx'
import AdminPage from './admin/AdminPage.jsx'
import PageShell from '../components/ui/PageShell.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <PageShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/customer" element={<CustomerPage />} />
          <Route path="/customer/register" element={<CustomerRegisterPage />} />
          <Route path="/rider" element={<RiderPage />} />
          <Route path="/rider/register" element={<RiderRegisterPage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </PageShell>
    </BrowserRouter>
  )
}

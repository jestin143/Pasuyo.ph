import { Link, useLocation } from 'react-router-dom'

export default function PageShell({ children }) {
  const location = useLocation()
  const isActive = (path) => location.pathname === path ? 'nav-link active' : 'nav-link'

  return (
    <div className="page-shell">
      <header className="shell-header">
        <div className="shell-header-inner">
          <Link to="/" className="brand">
            <span className="brand-mark">P</span>
            <span className="brand-text">PASUYO.PH</span>
          </Link>
          <nav className="shell-nav">
            <Link to="/customer" className={isActive('/customer')}>Customer</Link>
            <Link to="/rider" className={isActive('/rider')}>Rider</Link>
            <Link to="/store" className={isActive('/store')}>Store</Link>
          </nav>
        </div>
      </header>

      <main className="shell-main">{children}</main>

      <footer className="shell-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="brand-mark small">P</span>
            <span>PASUYO.PH</span>
          </div>
          <p className="footer-tagline">Hyperlocal PasaBuy for Oriental Mindoro. Calapan to Bulalacao.</p>
          <div className="footer-links">
            <Link to="/customer">Customer</Link>
            <Link to="/rider">Rider</Link>
            <Link to="/store">Store</Link>
            <Link to="/admin">Admin</Link>
          </div>
          <p className="footer-copy">© {new Date().getFullYear()} PASUYO.PH — Built for Mindoreños.</p>
        </div>
      </footer>
    </div>
  )
}

import { Phone, Compass } from 'lucide-react';
import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div style={{ backgroundColor: 'var(--bg-white)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Global Navbar */}
      <nav style={{ padding: '1rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)', backgroundColor: 'var(--bg-white)', position: 'sticky', top: 0, zIndex: 50 }}>
        <div className="container flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4" style={{ textDecoration: 'none' }}>
            <Compass size={45} color="var(--primary-navy)" />
            <span className="montserrat" style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary-navy)' }}>
              4 POINTS <span style={{ fontWeight: 400 }}>HEALTH AND WELLNESS</span>
            </span>
          </Link>
          <a href="tel:7807055775" className="btn-secondary">
            <Phone size={18} /> CALL NOW
          </a>
        </div>
      </nav>

      {/* Dynamic Page Content */}
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      {/* Global Footer */}
      <footer style={{ backgroundColor: 'var(--primary-navy)', padding: '5rem 0 3rem 0', color: 'var(--bg-white)' }}>
        <div className="container flex-col items-center justify-center text-center">
          <div className="flex items-center justify-center gap-4" style={{ marginBottom: '2rem' }}>
             <Compass size={50} color="var(--bg-white)" />
             <span className="montserrat" style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '1px' }}>
               4 POINTS <span style={{ fontWeight: 400, color: 'var(--primary-sage)' }}>HEALTH AND WELLNESS</span>
             </span>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', marginBottom: '0.5rem' }}>11634 142 Street Suite 110 Edmonton, AB T5M 1V4</p>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', marginBottom: '3rem' }}>780.705.5775 | info@4pointshealth.com</p>
          
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', width: '100%' }}>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>&copy; {new Date().getFullYear()} 4 Points Health and Wellness. Standalone Specialized Routing Engine.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

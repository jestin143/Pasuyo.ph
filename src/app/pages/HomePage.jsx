import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <span className="hero-badge">Oriental Mindoro • Calapan City Based</span>
          <h1 className="hero-title">
            May ipapasuyo ka?
            <br />
            <span className="accent">Kami na ang bahala.</span>
          </h1>
          <p className="hero-desc">
            PASUYO.PH connects you to trusted local riders and stores across Oriental Mindoro.
            Safe, simple, and made for Mindoreños — from Puerto Galera to Bulalacao.
          </p>

          <div className="hero-ctas">
            <Link to="/customer" className="btn btn-primary">
              Start a Pasabuy
            </Link>
            <Link to="/rider/register" className="btn btn-secondary">
              Become a Rider
            </Link>
          </div>

          <div className="hero-trust">
            <div className="trust-item"><span className="trust-dot" />Local riders only</div>
            <div className="trust-item"><span className="trust-dot" />Cashless or COD</div>
            <div className="trust-item"><span className="trust-dot" />Real-time tracking</div>
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="section services">
        <div className="section-inner">
          <div className="section-head">
            <h2>Isang platform para sa lahat</h2>
            <p>Whether you need something bought, delivered, or sold — PASUYO.PH has a space for you.</p>
          </div>

          <div className="cards">
            <div className="card">
              <div className="card-icon">🛒</div>
              <h3>For Customers</h3>
              <p>Magpa-bili, magpa-deliver, magpa-pickup. Any store in your municipality.</p>
              <Link to="/customer" className="card-link">Go to Customer →</Link>
            </div>
            <div className="card">
              <div className="card-icon">🏍️</div>
              <h3>For Riders</h3>
              <p>Kumita sa bawat biyahe. Flexible hours, local deliveries only.</p>
              <Link to="/rider" className="card-link">Go to Rider →</Link>
            </div>
            <div className="card">
              <div className="card-icon">🏪</div>
              <h3>For Stores</h3>
              <p>Connect your store to customers across Oriental Mindoro.</p>
              <Link to="/store" className="card-link">Go to Store →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section how-it-works">
        <div className="section-inner">
          <div className="section-head">
            <h2>Paano gumagana?</h2>
            <p>3 simple steps. Walang hassle.</p>
          </div>

          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <h4>Create a Pasabuy</h4>
              <p>Tell us what you need, where to buy, and where to deliver.</p>
            </div>
            <div className="step-line" />
            <div className="step">
              <div className="step-num">2</div>
              <h4>Rider Accepts</h4>
              <p>A nearby verified rider accepts and shops for you.</p>
            </div>
            <div className="step-line" />
            <div className="step">
              <div className="step-num">3</div>
              <h4>Delivered</h4>
              <p>Track in real-time. Pay COD or online. Done.</p>
            </div>
          </div>

          <div className="how-cta">
            <Link to="/customer/register" className="btn btn-primary large">
              Start Your First Pasabuy
            </Link>
            <span className="how-sub">No store listings, no fake promises — just real local help.</span>
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="section coverage">
        <div className="section-inner coverage-inner">
          <div>
            <h3>Built for Oriental Mindoro</h3>
            <p>
              From Calapan City, Puerto Galera, San Teodoro, Baco, Victoria, Socorro, Pola,
              Pinamalayan, Gloria, Bansud, Bongabong, Roxas, Mansalay, Bulalacao, to Naujan —
              we keep it local.
            </p>
          </div>
          <div className="coverage-badge">Mindoro-first delivery</div>
        </div>
      </section>
    </div>
  )
}

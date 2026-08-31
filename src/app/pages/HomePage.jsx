import { Link } from 'react-router-dom'
import { municipalities } from '../../data/orientalMindoro.js'

export default function HomePage() {
  const featuredMunicipalities = municipalities.slice(0, 10)

  return (
    <main className="home">

      {/* HERO */}
      <section className="home-hero">
        <div className="home-hero-inner">

          <div className="home-hero-content">
            <span className="home-hero-badge">
              <span className="status-dot" />
              PASUYO.PH • ORIENTAL MINDORO
            </span>

            <h1 className="home-hero-title">
              May ipapasuyo ka?
              <br />
              <span className="home-hero-accent">Pasuyo mo lang.</span>
              <br />
              Kami na ang bahala.
            </h1>

            <p className="home-hero-description">
              Magpabili, magpa-pickup, o magpa-deliver.
              I-submit ang kailangan mo at hayaan ang PASUYO.PH
              na tumulong sa iyong local delivery request.
            </p>

            <div className="home-hero-actions">
              <Link to="/customer" className="home-btn home-btn-primary">
                BOOK PASABUY
                <span>→</span>
              </Link>

              <Link to="/rider/register" className="home-btn home-btn-secondary">
                BECOME A RIDER
              </Link>
            </div>

            <div className="home-hero-trust">
              <span>
                <span className="check-mark">✓</span>
                Local-first
              </span>

              <span>
                <span className="check-mark">✓</span>
                Simple booking
              </span>

              <span>
                <span className="check-mark">✓</span>
                Community-driven
              </span>
            </div>
          </div>

          {/* DELIVERY / MAP VISUAL */}
          <div className="home-hero-visual">
            <div className="home-map-card">

              <div className="home-map-header">
                <div className="home-map-label">
                  <span className="map-pin-small">⌖</span>
                  PASUYO.PH MAP
                </div>

                <span className="home-map-region">
                  MINDORO
                </span>
              </div>

              <div className="home-map-area">

                <div className="home-route">

                  <div className="home-route-item">
                    <div className="home-route-icon pickup-icon">
                      P
                    </div>

                    <div className="home-route-info">
                      <span>PICKUP</span>
                      <strong>Chosen store</strong>
                      <small>Local store / tindahan</small>
                    </div>
                  </div>

                  <div className="home-route-line" />

                  <div className="home-route-item">
                    <div className="home-route-icon rider-icon">
                      🏍️
                    </div>

                    <div className="home-route-info">
                      <span>RIDER</span>
                      <strong>Delivery in progress</strong>
                      <small>Pickup → Delivery</small>
                    </div>
                  </div>

                  <div className="home-route-line" />

                  <div className="home-route-item">
                    <div className="home-route-icon delivery-icon">
                      ⌖
                    </div>

                    <div className="home-route-info">
                      <span>DELIVERY</span>
                      <strong>Your location</strong>
                      <small>Recipient address</small>
                    </div>
                  </div>

                </div>

              </div>

              <div className="home-map-footer">
                <div>
                  <span>REQUEST</span>
                  <strong>Pasabuy</strong>
                </div>

                <div>
                  <span>SERVICE AREA</span>
                  <strong>Oriental Mindoro</strong>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* QUICK ACTIONS */}
      <section className="home-quick-actions">
        <div className="home-container">

          <div className="home-section-intro">
            <span className="home-section-kicker">
              PASUYO.PH
            </span>

            <h2>
              Isang platform para sa lahat.
            </h2>

            <p>
              Para sa customer, rider, at lokal na store.
            </p>
          </div>

          <div className="home-action-grid">

            <Link to="/customer" className="home-action-card customer-card">
              <div className="home-action-top">
                <div className="home-action-icon">
                  🛒
                </div>

                <span className="home-action-label">
                  CUSTOMER
                </span>
              </div>

              <div className="home-action-content">
                <h3>Magpasuyo</h3>

                <p>
                  Magpabili, magpa-pickup, o magpa-deliver
                  ng kailangan mo.
                </p>
              </div>

              <span className="home-action-link">
                Go to Customer →
              </span>
            </Link>


            <Link to="/rider" className="home-action-card rider-card">
              <div className="home-action-top">
                <div className="home-action-icon">
                  🏍️
                </div>

                <span className="home-action-label">
                  RIDER
                </span>
              </div>

              <div className="home-action-content">
                <h3>Maging Rider</h3>

                <p>
                  Tingnan ang available requests at
                  mag-manage ng delivery.
                </p>
              </div>

              <span className="home-action-link">
                Go to Rider →
              </span>
            </Link>


            <Link to="/store" className="home-action-card store-card">
              <div className="home-action-top">
                <div className="home-action-icon">
                  🏪
                </div>

                <span className="home-action-label">
                  STORE
                </span>
              </div>

              <div className="home-action-content">
                <h3>Para sa Store</h3>

                <p>
                  I-register ang iyong lokal na tindahan
                  sa PASUYO.PH.
                </p>
              </div>

              <span className="home-action-link">
                Go to Store →
              </span>
            </Link>

          </div>

        </div>
      </section>


      {/* HOW IT WORKS */}
      <section className="home-how">
        <div className="home-container">

          <div className="home-section-intro centered">
            <span className="home-section-kicker">
              PAANO GUMAGANA
            </span>

            <h2>
              Simple lang ang pagpasuyo.
            </h2>

            <p>
              Tatlong hakbang para makapag-submit
              ng delivery request.
            </p>
          </div>

          <div className="home-steps">

            <div className="home-step">
              <div className="home-step-number">
                01
              </div>

              <div className="home-step-content">
                <h3>Gumawa ng request</h3>

                <p>
                  Ilagay ang item, quantity, tindahan,
                  at delivery address.
                </p>
              </div>
            </div>


            <div className="home-step">
              <div className="home-step-number">
                02
              </div>

              <div className="home-step-content">
                <h3>Makahanap ng rider</h3>

                <p>
                  Makikita ng available rider ang
                  iyong pasabuy request.
                </p>
              </div>
            </div>


            <div className="home-step">
              <div className="home-step-number">
                03
              </div>

              <div className="home-step-content">
                <h3>Matanggap ang delivery</h3>

                <p>
                  Susundan ang request status hanggang
                  makumpleto ang delivery.
                </p>
              </div>
            </div>

          </div>

          <div className="home-section-action">
            <Link to="/customer" className="home-btn home-btn-primary">
              GUMAWA NG PASABUY
              <span>→</span>
            </Link>
          </div>

        </div>
      </section>


      {/* FEATURES */}
      <section className="home-features">
        <div className="home-container">

          <div className="home-section-intro">
            <span className="home-section-kicker">
              PLATFORM FEATURES
            </span>

            <h2>
              Ginawa para sa local delivery.
            </h2>

            <p>
              Bawat bahagi ng PASUYO.PH ay may sariling purpose.
            </p>
          </div>


          <div className="home-feature-grid">

            {/* CUSTOMER */}
            <div className="home-feature-card">
              <span className="home-feature-label">
                CUSTOMER
              </span>

              <h3>
                Magpasuyo nang madali.
              </h3>

              <ul>
                <li>Magpasuyo</li>
                <li>Magpabili</li>
                <li>Magpa-pickup</li>
                <li>Magpa-deliver</li>
              </ul>

              <Link to="/customer" className="home-feature-link">
                Start as Customer →
              </Link>
            </div>


            {/* RIDER */}
            <div className="home-feature-card dark">
              <span className="home-feature-label">
                RIDER
              </span>

              <h3>
                Mag-deliver at kumita.
              </h3>

              <ul>
                <li>Register as Rider</li>
                <li>View available requests</li>
                <li>Accept delivery</li>
                <li>Manage delivery status</li>
              </ul>

              <Link to="/rider/register" className="home-feature-link">
                Become a Rider →
              </Link>
            </div>


            {/* STORE */}
            <div className="home-feature-card">
              <span className="home-feature-label">
                STORE
              </span>

              <h3>
                Para sa lokal na tindahan.
              </h3>

              <ul>
                <li>Register store</li>
                <li>Manage store information</li>
                <li>Add products</li>
                <li>No product price display</li>
              </ul>

              <Link to="/store" className="home-feature-link">
                Go to Store →
              </Link>
            </div>

          </div>

        </div>
      </section>


      {/* ORIENTAL MINDORO */}
      <section className="home-coverage">
        <div className="home-container">

          <div className="home-coverage-card">

            <div className="home-coverage-content">
              <span className="home-section-kicker">
                LOCAL FIRST
              </span>

              <h2>
                Para sa buong
                <br />
                <span>Oriental Mindoro.</span>
              </h2>

              <p>
                Ang PASUYO.PH ay ginawa para sa local
                pasabuy at delivery needs ng mga Mindoreño.
              </p>
            </div>


            <div className="home-coverage-list">
              {featuredMunicipalities.map((municipality) => (
                <span
                  key={municipality.name}
                  className="home-location-pill"
                >
                  {municipality.name}
                </span>
              ))}
            </div>

          </div>

        </div>
      </section>


      {/* FINAL CTA */}
      <section className="home-final-cta">
        <div className="home-container">

          <div className="home-final-card">

            <span className="home-section-kicker">
              PASUYO.PH
            </span>

            <h2>
              May kailangan ka?
              <br />
              <span>Pasuyo mo lang.</span>
            </h2>

            <p>
              Gumawa ng pasabuy request at magsimula.
            </p>

            <div className="home-final-actions">

              <Link to="/customer" className="home-btn home-btn-primary">
                BOOK PASABUY
                <span>→</span>
              </Link>

              <Link to="/stores" className="home-btn home-btn-secondary">
                BROWSE STORES
              </Link>

            </div>

          </div>

        </div>
      </section>

    </main>
  )
}

import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">

          <div className="hero-content">
            <span className="hero-badge">
              PASUYO.PH • Oriental Mindoro
            </span>

            <h1 className="hero-title">
              May ipapasuyo?
              <br />
              <span className="accent">Pasuyo na.</span>
            </h1>

            <p className="hero-desc">
              Magpagawa, magpabili, magpa-pickup, o magpa-deliver.
              I-submit ang kailangan mo at hayaan ang PASUYO.PH
              na tumulong sa iyong local delivery request.
            </p>

            <div className="hero-ctas">
              <Link to="/customer" className="btn btn-primary">
                Magpasuyo
                <span>→</span>
              </Link>

              <Link to="/rider/register" className="btn btn-secondary">
                Maging Rider
              </Link>
            </div>

            <div className="hero-note">
              <span>●</span>
              Local-first service for Oriental Mindoro
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="hero-visual">
            <div className="delivery-card">

              <div className="delivery-card-top">
                <span className="delivery-label">PASABUY REQUEST</span>
                <span className="delivery-status">NEW</span>
              </div>

              <div className="delivery-route">
                <div className="route-point">
                  <span className="route-dot pickup" />
                  <div>
                    <small>Pickup</small>
                    <strong>Your chosen store</strong>
                  </div>
                </div>

                <div className="route-line" />

                <div className="route-point">
                  <span className="route-dot delivery" />
                  <div>
                    <small>Deliver to</small>
                    <strong>Your location</strong>
                  </div>
                </div>
              </div>

              <div className="delivery-card-bottom">
                <span>Simple booking</span>
                <span>Local delivery</span>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* QUICK ACTIONS */}
      <section className="quick-actions">
        <div className="section-inner">

          <div className="quick-grid">

            <Link to="/customer" className="quick-card primary">
              <div className="quick-icon">🛍️</div>
              <div>
                <span className="quick-label">CUSTOMER</span>
                <h3>Magpasuyo</h3>
                <p>Magpabili o magpa-deliver ng kailangan mo.</p>
              </div>
              <span className="quick-arrow">→</span>
            </Link>

            <Link to="/rider" className="quick-card">
              <div className="quick-icon">🏍️</div>
              <div>
                <span className="quick-label">RIDER</span>
                <h3>Mag-deliver</h3>
                <p>Tingnan ang available na pasabuy requests.</p>
              </div>
              <span className="quick-arrow">→</span>
            </Link>

            <Link to="/store" className="quick-card">
              <div className="quick-icon">🏪</div>
              <div>
                <span className="quick-label">STORE</span>
                <h3>Para sa Store</h3>
                <p>I-register ang iyong store sa PASUYO.PH.</p>
              </div>
              <span className="quick-arrow">→</span>
            </Link>

          </div>

        </div>
      </section>


      {/* HOW IT WORKS */}
      <section className="section how-it-works">
        <div className="section-inner">

          <div className="section-head centered">
            <span className="section-kicker">PAANO ITO GUMAGANA</span>
            <h2>Simple lang ang pagpasuyo.</h2>
            <p>
              Tatlong hakbang para makapag-submit ng delivery request.
            </p>
          </div>

          <div className="steps">

            <div className="step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Gumawa ng request</h3>
                <p>
                  Sabihin kung ano ang ipapabili o ipapadeliver,
                  saan kukunin, at saan dadalhin.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>Hintayin ang rider</h3>
                <p>
                  Ang available na rider ang maaaring tumanggap
                  ng iyong request.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Matanggap ang order</h3>
                <p>
                  Kapag nakumpleto ang delivery, makikita mo ang
                  status ng iyong request.
                </p>
              </div>
            </div>

          </div>

          <div className="section-action">
            <Link to="/customer" className="btn btn-primary large">
              Gumawa ng Pasabuy Request
            </Link>
          </div>

        </div>
      </section>


      {/* LOCAL COVERAGE */}
      <section className="local-section">
        <div className="section-inner">

          <div className="local-card">

            <div className="local-content">
              <span className="section-kicker">LOCAL FIRST</span>

              <h2>
                Para sa mga taga
                <br />
                <span>Oriental Mindoro.</span>
              </h2>

              <p>
                Ang PASUYO.PH ay ginawa para sa local pasabuy at
                delivery needs ng mga Mindoreño.
              </p>
            </div>

            <div className="local-list">
              <div>Calapan City</div>
              <div>Puerto Galera</div>
              <div>Naujan</div>
              <div>Pinamalayan</div>
              <div>Bongabong</div>
              <div>Roxas</div>
              <div>Mansalay</div>
              <div>Bulalacao</div>
            </div>

          </div>

        </div>
      </section>


      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="section-inner">

          <div className="final-cta-inner">
            <span className="section-kicker">PASUYO.PH</span>

            <h2>
              May kailangan ka?
              <br />
              <span>Ipagawa mo na.</span>
            </h2>

            <p>
              Gumawa ng pasabuy request at magsimula.
            </p>

            <Link to="/customer" className="btn btn-primary large">
              Start a Pasabuy
              <span>→</span>
            </Link>
          </div>

        </div>
      </section>

    </div>
  )
}

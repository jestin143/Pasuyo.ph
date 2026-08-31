import { Link } from 'react-router-dom'
import { municipalities } from '../../data/orientalMindoro.js'

export default function HomePage() {
  const featuredMunicipalities = municipalities.slice(0, 10)

  return (
    <main className="home">
      <section className="home-hero">
        <div className="home-container home-hero-grid">
          <div className="home-hero-content">
            <span className="home-badge">
              <span className="status-dot" />
              PASUYO.PH • ORIENTAL MINDORO
            </span>

            <h1 className="home-title">
              May ipapasuyo ka?
              <br />
              <span>Pasuyo mo lang.</span>
              <br />
              Kami na ang bahala.
            </h1>

            <p className="home-description">
              Magpabili, magpa-pickup, magpa-deliver, o magpagawa
              ng kailangan mo. I-submit ang request at makipag-ugnayan
              sa local rider para sa iyong delivery.
            </p>

            <div className="home-actions">
              <Link to="/customer" className="home-button home-button-primary">
                Magpasuyo <span>→</span>
              </Link>
              <Link to="/rider/register" className="home-button home-button-secondary">
                Maging Rider
              </Link>
            </div>

            <div className="home-trust">
              <span>✓ Local-first</span>
              <span>✓ Simple booking</span>
              <span>✓ Para sa Mindoro</span>
            </div>
          </div>

          <div className="home-hero-visual">
            <div className="delivery-panel">
              <div className="delivery-panel-header">
                <div>
                  <small>PASABUY REQUEST</small>
                  <strong>Delivery Request</strong>
                </div>
                <span className="request-status">NEW</span>
              </div>

              <div className="delivery-route">
                <div className="route-item">
                  <div className="route-icon pickup-icon">P</div>
                  <div className="route-info">
                    <small>PICKUP</small>
                    <strong>Your chosen store</strong>
                    <span>Local store / tindahan</span>
                  </div>
                </div>

                <div className="route-connector"><i /><i /><i /></div>

                <div className="route-item">
                  <div className="route-icon rider-icon">🏍️</div>
                  <div className="route-info">
                    <small>RIDER</small>
                    <strong>Delivery in progress</strong>
                    <span>Rider accepts the request</span>
                  </div>
                </div>

                <div className="route-connector"><i /><i /><i /></div>

                <div className="route-item">
                  <div className="route-icon delivery-icon">⌖</div>
                  <div className="route-info">
                    <small>DELIVERY</small>
                    <strong>Your location</strong>
                    <span>Home / recipient address</span>
                  </div>
                </div>
              </div>

              <div className="delivery-panel-footer">
                <div>
                  <small>STATUS</small>
                  <strong>Waiting for Rider</strong>
                </div>
                <span className="service-pill">PasaBuy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-quick-section">
        <div className="home-container">
          <div className="quick-grid">
            <Link to="/customer" className="quick-card quick-card-main">
              <div className="quick-card-top">
                <div className="quick-icon">🛒</div>
                <span className="quick-label">CUSTOMER</span>
              </div>
              <h3>Magpasuyo</h3>
              <p>Magpabili, magpa-pickup, o magpa-deliver ng kailangan mo.</p>
              <span className="quick-link">Magpasuyo ngayon →</span>
            </Link>

            <Link to="/rider" className="quick-card">
              <div className="quick-card-top">
                <div className="quick-icon rider">🏍️</div>
                <span className="quick-label">RIDER</span>
              </div>
              <h3>Maging Rider</h3>
              <p>Tingnan ang available requests at mag-manage ng delivery.</p>
              <span className="quick-link">Pumunta sa Rider →</span>
            </Link>

            <Link to="/store" className="quick-card">
              <div className="quick-card-top">
                <div className="quick-icon store">🏪</div>
                <span className="quick-label">STORE</span>
              </div>
              <h3>Para sa Store</h3>
              <p>I-register ang iyong lokal na tindahan sa PASUYO.PH.</p>
              <span className="quick-link">Register Store →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="home-how">
        <div className="home-container">
          <div className="home-section-heading">
            <span>PAANO GUMAGANA</span>
            <h2>Simple lang ang pagpasuyo.</h2>
            <p>Tatlong hakbang mula request hanggang delivery.</p>
          </div>

          <div className="home-steps">
            <div className="home-step">
              <div className="step-number">01</div>
              <div>
                <h3>Gumawa ng request</h3>
                <p>Ilagay ang item, quantity, tindahan, at delivery location.</p>
              </div>
            </div>

            <div className="home-step">
              <div className="step-number dark">02</div>
              <div>
                <h3>Rider accepts</h3>
                <p>Makikita ng rider ang available request at maaari niya itong tanggapin.</p>
              </div>
            </div>

            <div className="home-step">
              <div className="step-number light">03</div>
              <div>
                <h3>Matanggap ang delivery</h3>
                <p>Makikita ang status ng request habang inaasikaso ang delivery.</p>
              </div>
            </div>
          </div>

          <div className="home-section-button">
            <Link to="/customer" className="home-button home-button-primary">
              Gumawa ng Pasabuy Request <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="home-features">
        <div className="home-container">
          <div className="home-section-heading">
            <span>PARA SA LAHAT</span>
            <h2>Isang platform para sa local delivery.</h2>
            <p>Customer, rider, at store — magkakaugnay sa iisang local platform.</p>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">🛍️</div>
              <span>CUSTOMER</span>
              <h3>Magpasuyo nang madali</h3>
              <ul>
                <li>Magpasuyo</li>
                <li>Magpabili</li>
                <li>Magpa-pickup</li>
                <li>Magpa-deliver</li>
              </ul>
              <Link to="/customer">Customer →</Link>
            </div>

            <div className="feature-card feature-card-dark">
              <div className="feature-icon">🏍️</div>
              <span>RIDER</span>
              <h3>Mag-deliver at kumita</h3>
              <ul>
                <li>Register as rider</li>
                <li>View requests</li>
                <li>Accept delivery</li>
                <li>Manage delivery</li>
              </ul>
              <Link to="/rider">Rider →</Link>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🏪</div>
              <span>STORE</span>
              <h3>Para sa lokal na tindahan</h3>
              <ul>
                <li>Register store</li>
                <li>Manage store information</li>
                <li>Add products</li>
                <li>Connect with customers</li>
              </ul>
              <Link to="/store">Store →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-map-section">
        <div className="home-container">
          <div className="map-feature">
            <div className="map-feature-content">
              <span className="home-kicker">LOCATION-BASED</span>
              <h2>Delivery na may tamang location.</h2>
              <p>
                Pumili ng municipality at barangay, maglagay ng map pin,
                o gamitin ang current location.
              </p>

              <div className="map-feature-list">
                <div><span>✓</span> Piliin ang municipality</div>
                <div><span>✓</span> Piliin ang barangay</div>
                <div><span>✓</span> Maglagay ng map pin</div>
                <div><span>✓</span> Gamitin ang current location</div>
              </div>

              <Link to="/customer" className="home-button home-button-primary">
                Magpasuyo <span>→</span>
              </Link>
            </div>

            <div className="map-preview">
              <div className="map-preview-header">
                <span>📍 DELIVERY LOCATION</span>
                <small>MAP</small>
              </div>

              <div className="fake-map">
                <div className="map-road road-one" />
                <div className="map-road road-two" />
                <div className="map-road road-three" />
                <div className="map-pin">⌖</div>

                <div className="map-location-card">
                  <small>DELIVERY TO</small>
                  <strong>Your Location</strong>
                  <span>Oriental Mindoro</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-coverage">
        <div className="home-container">
          <div className="coverage-card">
            <div className="coverage-content">
              <span className="home-kicker light">ORIENTAL MINDORO</span>
              <h2>
                Gawa para sa buong
                <br />
                <span>Oriental Mindoro.</span>
              </h2>
              <p>
                Local-first platform para sa mga Mindoreño.
                Simula sa Calapan at palawak sa iba't ibang municipality.
              </p>
            </div>

            <div className="municipality-list">
              {featuredMunicipalities.map((municipality) => (
                <span key={municipality.name}>{municipality.name}</span>
              ))}
              {municipalities.length > featuredMunicipalities.length && (
                <span className="more">
                  + {municipalities.length - featuredMunicipalities.length} more
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="home-final">
        <div className="home-container">
          <div className="final-card">
            <span className="home-kicker">PASUYO.PH</span>
            <h2>
              May kailangan ka?
              <br />
              <span>Pasuyo mo lang.</span>
            </h2>
            <p>Gumawa ng pasabuy request at magsimula.</p>

            <div className="final-actions">
              <Link to="/customer" className="home-button home-button-primary">
                BOOK PASABUY <span>→</span>
              </Link>
              <Link to="/stores" className="home-button home-button-secondary">
                BROWSE STORES
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

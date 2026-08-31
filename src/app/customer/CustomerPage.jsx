import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function CustomerPage() {
  const [order, setOrder] = useState('')
  const [location, setLocation] = useState('')
  const [destination, setDestination] = useState('')

  const canContinue =
    order.trim() !== '' &&
    location.trim() !== '' &&
    destination.trim() !== ''

  return (
    <main style={styles.page}>

      {/* TOP BAR */}
      <header style={styles.header}>
        <Link to="/" style={styles.logo}>
          <span style={styles.logoMark}>P</span>
          <span>
            PASUYO<span style={styles.logoDot}>.PH</span>
          </span>
        </Link>

        <Link to="/" style={styles.back}>
          ← Home
        </Link>
      </header>

      {/* BOOKING AREA */}
      <section style={styles.bookingSection}>

        <div style={styles.bookingContainer}>

          {/* LEFT — BOOK ORDER */}
          <div style={styles.formCard}>

            <div style={styles.titleArea}>
              <div style={styles.kicker}>PASUYO.PH</div>

              <h1 style={styles.title}>
                Book Order
              </h1>

              <p style={styles.subtitle}>
                Ilagay lang ang order, location at destination.
              </p>
            </div>

            {/* YOUR ORDER */}
            <div style={styles.fieldGroup}>
              <label style={styles.label}>
                YOUR ORDER
              </label>

              <div style={styles.inputWrap}>
                <span style={styles.inputIcon}>🛍️</span>

                <input
                  type="text"
                  value={order}
                  onChange={(e) => setOrder(e.target.value)}
                  placeholder="Ano ang ipapabili o ipapagawa?"
                  style={styles.input}
                />
              </div>
            </div>

            {/* ORDER LOCATION */}
            <div style={styles.fieldGroup}>
              <label style={styles.label}>
                ORDER LOCATION
              </label>

              <div style={styles.inputWrap}>
                <span style={styles.locationIcon}>●</span>

                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Saan kukunin ang order?"
                  style={styles.input}
                />
              </div>
            </div>

            {/* ORDER DESTINATION */}
            <div style={styles.fieldGroup}>
              <label style={styles.label}>
                ORDER DESTINATION
              </label>

              <div style={styles.inputWrap}>
                <span style={styles.destinationIcon}>⌖</span>

                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Saan dadalhin ang order?"
                  style={styles.input}
                />
              </div>
            </div>

            {/* CONTINUE */}
            <button
              type="button"
              disabled={!canContinue}
              style={{
                ...styles.continueButton,
                ...(canContinue
                  ? styles.continueActive
                  : styles.continueDisabled),
              }}
            >
              CONTINUE
              <span>→</span>
            </button>

            <p style={styles.helper}>
              Piliin ang location at destination para makita ang route.
            </p>

          </div>

          {/* RIGHT — MAP */}
          <div style={styles.mapCard}>

            <div style={styles.mapTop}>
              <div>
                <div style={styles.mapKicker}>
                  DELIVERY MAP
                </div>

                <div style={styles.mapTitle}>
                  Order Route
                </div>
              </div>

              <div style={styles.mapBadge}>
                ORIENTAL MINDORO
              </div>
            </div>

            {/* MAP VISUAL */}
            <div style={styles.map}>

              {/* ROAD LINES */}
              <div style={{ ...styles.road, ...styles.road1 }} />
              <div style={{ ...styles.road, ...styles.road2 }} />
              <div style={{ ...styles.road, ...styles.road3 }} />
              <div style={{ ...styles.road, ...styles.road4 }} />
              <div style={{ ...styles.road, ...styles.road5 }} />

              {/* ROUTE */}
              <div style={styles.routeLine} />

              {/* PICKUP PIN */}
              <div style={{ ...styles.pin, ...styles.pickupPin }}>
                <div style={styles.pinCirclePickup}>●</div>
                <div style={styles.pinLabel}>
                  <strong>Order Location</strong>
                  <span>
                    {location || 'Pickup location'}
                  </span>
                </div>
              </div>

              {/* DESTINATION PIN */}
              <div style={{ ...styles.pin, ...styles.destinationPin }}>
                <div style={styles.pinCircleDestination}>⌖</div>
                <div style={styles.pinLabel}>
                  <strong>Destination</strong>
                  <span>
                    {destination || 'Delivery destination'}
                  </span>
                </div>
              </div>

              {/* RIDER */}
              <div style={styles.rider}>
                🏍️
              </div>

              <div style={styles.mapHint}>
                MAP
              </div>

            </div>

            {/* MAP BOTTOM */}
            <div style={styles.mapBottom}>

              <div>
                <span style={styles.bottomLabel}>
                  ORDER
                </span>

                <strong style={styles.bottomValue}>
                  {order || 'No order yet'}
                </strong>
              </div>

              <div style={styles.routeStatus}>
                <span style={styles.statusDot} />
                Ready to book
              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}


/* =========================
   STYLES
========================= */

const styles = {

  page: {
    minHeight: '100vh',
    background: '#f7faf9',
    color: '#0f172a',
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },

  header: {
    height: '72px',
    background: '#ffffff',
    borderBottom: '1px solid #e2e8f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 24px',
    position: 'sticky',
    top: 0,
    zIndex: 20,
  },

  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '9px',
    textDecoration: 'none',
    color: '#0f172a',
    fontSize: '17px',
    fontWeight: 900,
    letterSpacing: '-0.03em',
  },

  logoMark: {
    width: '34px',
    height: '34px',
    borderRadius: '11px',
    background: '#0d9488',
    color: '#ffffff',
    display: 'grid',
    placeItems: 'center',
    fontWeight: 900,
    fontSize: '16px',
  },

  logoDot: {
    color: '#0d9488',
  },

  back: {
    textDecoration: 'none',
    color: '#64748b',
    fontSize: '13px',
    fontWeight: 700,
  },

  bookingSection: {
    padding: '28px 18px 48px',
  },

  bookingContainer: {
    width: '100%',
    maxWidth: '1120px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'minmax(320px, 430px) minmax(0, 1fr)',
    gap: '18px',
    alignItems: 'stretch',
  },

  formCard: {
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '26px',
    padding: '26px',
    boxShadow: '0 12px 35px rgba(15,23,42,0.06)',
  },

  titleArea: {
    marginBottom: '26px',
  },

  kicker: {
    fontSize: '10px',
    fontWeight: 900,
    letterSpacing: '0.13em',
    color: '#0d9488',
    marginBottom: '8px',
  },

  title: {
    fontSize: '32px',
    lineHeight: 1,
    letterSpacing: '-0.04em',
    fontWeight: 900,
    margin: 0,
  },

  subtitle: {
    color: '#64748b',
    fontSize: '13px',
    lineHeight: 1.5,
    margin: '10px 0 0',
  },

  fieldGroup: {
    marginBottom: '18px',
  },

  label: {
    display: 'block',
    fontSize: '10px',
    fontWeight: 900,
    letterSpacing: '0.1em',
    color: '#475569',
    marginBottom: '7px',
  },

  inputWrap: {
    minHeight: '56px',
    border: '1px solid #dbe3e8',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '11px',
    padding: '0 15px',
    background: '#ffffff',
    boxSizing: 'border-box',
  },

  inputIcon: {
    fontSize: '17px',
  },

  locationIcon: {
    width: '22px',
    height: '22px',
    borderRadius: '50%',
    background: '#ccfbf1',
    color: '#0d9488',
    display: 'grid',
    placeItems: 'center',
    fontSize: '10px',
    flexShrink: 0,
  },

  destinationIcon: {
    width: '22px',
    height: '22px',
    borderRadius: '50%',
    background: '#0f172a',
    color: '#ffffff',
    display: 'grid',
    placeItems: 'center',
    fontSize: '13px',
    flexShrink: 0,
  },

  input: {
    border: 0,
    outline: 0,
    width: '100%',
    minWidth: 0,
    fontSize: '14px',
    color: '#0f172a',
    background: 'transparent',
    fontFamily: 'inherit',
  },

  continueButton: {
    width: '100%',
    height: '54px',
    border: 0,
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    fontSize: '13px',
    fontWeight: 900,
    letterSpacing: '0.05em',
    fontFamily: 'inherit',
    transition: '0.2s ease',
  },

  continueActive: {
    background: '#0d9488',
    color: '#ffffff',
    cursor: 'pointer',
    boxShadow: '0 10px 24px rgba(13,148,136,0.22)',
  },

  continueDisabled: {
    background: '#e2e8f0',
    color: '#94a3b8',
    cursor: 'not-allowed',
  },

  helper: {
    textAlign: 'center',
    fontSize: '10px',
    color: '#94a3b8',
    margin: '11px 0 0',
  },

  mapCard: {
    minHeight: '570px',
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '26px',
    padding: '14px',
    boxShadow: '0 12px 35px rgba(15,23,42,0.06)',
    display: 'flex',
    flexDirection: 'column',
  },

  mapTop: {
    padding: '8px 8px 14px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '10px',
  },

  mapKicker: {
    fontSize: '9px',
    fontWeight: 900,
    letterSpacing: '0.12em',
    color: '#0d9488',
  },

  mapTitle: {
    fontSize: '18px',
    fontWeight: 900,
    letterSpacing: '-0.02em',
    marginTop: '3px',
  },

  mapBadge: {
    background: '#f0fdfa',
    border: '1px solid #ccfbf1',
    color: '#0f766e',
    borderRadius: '999px',
    padding: '7px 10px',
    fontSize: '9px',
    fontWeight: 900,
    whiteSpace: 'nowrap',
  },

  map: {
    flex: 1,
    minHeight: '430px',
    borderRadius: '20px',
    overflow: 'hidden',
    position: 'relative',
    background:
      'linear-gradient(135deg, #eef6f3 0%, #e8f1ef 45%, #f6f8f7 100%)',
    border: '1px solid #dce9e5',
  },

  road: {
    position: 'absolute',
    background: 'rgba(255,255,255,0.9)',
    borderRadius: '999px',
    boxShadow: '0 0 0 1px rgba(148,163,184,0.08)',
  },

  road1: {
    width: '150%',
    height: '24px',
    left: '-25%',
    top: '28%',
    transform: 'rotate(-18deg)',
  },

  road2: {
    width: '130%',
    height: '18px',
    left: '-15%',
    top: '62%',
    transform: 'rotate(24deg)',
  },

  road3: {
    width: '18px',
    height: '130%',
    left: '32%',
    top: '-15%',
    transform: 'rotate(22deg)',
  },

  road4: {
    width: '15px',
    height: '130%',
    left: '68%',
    top: '-15%',
    transform: 'rotate(-34deg)',
  },

  road5: {
    width: '100%',
    height: '11px',
    left: '0',
    top: '46%',
    transform: 'rotate(5deg)',
  },

  routeLine: {
    position: 'absolute',
    width: '4px',
    height: '45%',
    left: '48%',
    top: '26%',
    background:
      'repeating-linear-gradient(to bottom, #0d9488 0 9px, transparent 9px 16px)',
    transform: 'rotate(-26deg)',
    transformOrigin: 'center',
    opacity: 0.8,
  },

  pin: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    zIndex: 5,
  },

  pickupPin: {
    left: '13%',
    top: '23%',
  },

  destinationPin: {
    right: '10%',
    bottom: '20%',
  },

  pinCirclePickup: {
    width: '38px',
    height: '38px',
    borderRadius: '50%',
    background: '#0d9488',
    color: '#ffffff',
    display: 'grid',
    placeItems: 'center',
    border: '5px solid rgba(255,255,255,0.8)',
    boxShadow: '0 8px 18px rgba(13,148,136,0.25)',
    fontSize: '12px',
  },

  pinCircleDestination: {
    width: '38px',
    height: '38px',
    borderRadius: '50%',
    background: '#0f172a',
    color: '#ffffff',
    display: 'grid',
    placeItems: 'center',
    border: '5px solid rgba(255,255,255,0.8)',
    boxShadow: '0 8px 18px rgba(15,23,42,0.22)',
    fontSize: '14px',
  },

  pinLabel: {
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    padding: '8px 10px',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '150px',
    boxShadow: '0 7px 20px rgba(15,23,42,0.08)',
  },

  rider: {
    position: 'absolute',
    left: '48%',
    top: '48%',
    width: '38px',
    height: '38px',
    borderRadius: '13px',
    background: '#ffffff',
    border: '1px solid #dbe3e8',
    display: 'grid',
    placeItems: 'center',
    boxShadow: '0 7px 18px rgba(15,23,42,0.1)',
    fontSize: '17px',
    zIndex: 4,
  },

  mapHint: {
    position: 'absolute',
    bottom: '12px',
    left: '12px',
    background: 'rgba(255,255,255,0.85)',
    border: '1px solid rgba(226,232,240,0.9)',
    borderRadius: '9px',
    padding: '6px 9px',
    fontSize: '8px',
    fontWeight: 900,
    letterSpacing: '0.1em',
    color: '#64748b',
  },

  mapBottom: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
    padding: '14px 8px 4px',
  },

  bottomLabel: {
    display: 'block',
    fontSize: '8px',
    fontWeight: 900,
    letterSpacing: '0.1em',
    color: '#94a3b8',
    marginBottom: '3px',
  },

  bottomValue: {
    display: 'block',
    fontSize: '12px',
    color: '#0f172a',
    maxWidth: '250px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },

  routeStatus: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    background: '#f0fdfa',
    color: '#0f766e',
    border: '1px solid #ccfbf1',
    padding: '7px 10px',
    borderRadius: '999px',
    fontSize: '9px',
    fontWeight: 800,
    whiteSpace: 'nowrap',
  },

  statusDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: '#14b8a6',
  },
}

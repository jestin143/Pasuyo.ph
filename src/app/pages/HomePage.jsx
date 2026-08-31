import { Link } from 'react-router-dom'
import { municipalities } from '../../data/orientalMindoro.js'

export default function HomePage() {
  const featuredMunicipalities = municipalities.slice(0, 10).map(m => m.name)

  return (
    <div style={{ background: '#f8fafb' }}>
      {/* HERO */}
      <section style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f0fdfa 100%)', borderBottom: '1px solid #e6f4f1' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '56px 20px 32px', display: 'grid', gap: '36px' }} className="hero-grid">
          {/* Left Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', alignSelf: 'flex-start', background: '#ffffff', border: '1px solid #ccfbf1', padding: '6px 12px', borderRadius: '999px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0f766e' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#14b8a6', display: 'inline-block' }} />
              Oriental Mindoro • Calapan City Based
            </div>

            <h1 style={{ fontSize: 'clamp(36px, 7vw, 62px)', lineHeight: '0.92', letterSpacing: '-0.04em', fontWeight: 900, color: '#0f172a', margin: 0 }}>
              May ipapasuyo ka?
              <br />
              <span style={{ color: '#0d9488' }}>Pasuyo mo lang.</span>
              <br />
              <span style={{ color: '#0f172a' }}>Kami na ang bahala.</span>
            </h1>

            <p style={{ fontSize: '17px', lineHeight: '1.6', color: '#475569', maxWidth: '520px', margin: 0 }}>
              Ang PASUYO.PH ay hyperlocal PasaBuy platform para sa Mindoreños. Magpabili, magpa-pickup, at magpa-deliver mula sa lokal na tindahan papunta sa bahay mo — simple, malinaw, at gawa para sa Oriental Mindoro.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '8px' }}>
              <Link to="/customer" style={{ background: '#0d9488', color: '#ffffff', padding: '16px 26px', borderRadius: '999px', fontWeight: 800, fontSize: '14px', letterSpacing: '0.04em', textDecoration: 'none', boxShadow: '0 8px 24px rgba(13,148,136,0.25)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                BOOK PASABUY
              </Link>
              <Link to="/rider/register" style={{ background: '#ffffff', color: '#0f172a', padding: '16px 26px', borderRadius: '999px', fontWeight: 700, fontSize: '14px', border: '1px solid #e2e8f0', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                BECOME A RIDER
              </Link>
            </div>

            <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap', marginTop: '10px', fontSize: '12px', fontWeight: 600, color: '#64748b' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: '16px', height: '16px', borderRadius: '6px', background: '#f0fdfa', border: '1px solid #ccfbf1', display: 'grid', placeItems: 'center', fontSize: '10px' }}>✓</span> Local-first</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: '16px', height: '16px', borderRadius: '6px', background: '#f0fdfa', border: '1px solid #ccfbf1', display: 'grid', placeItems: 'center', fontSize: '10px' }}>✓</span> Simple booking</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: '16px', height: '16px', borderRadius: '6px', background: '#f0fdfa', border: '1px solid #ccfbf1', display: 'grid', placeItems: 'center', fontSize: '10px' }}>✓</span> Community project</span>
            </div>
          </div>

          {/* Right Visual */}
          <div style={{ position: 'relative', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '28px', padding: '18px', boxShadow: '0 20px 60px rgba(15,23,42,0.08)', overflow: 'hidden' }}>
            <div style={{ background: 'linear-gradient(135deg, #f0fdfa 0%, #ecfeff 60%, #ffffff 100%)', borderRadius: '20px', padding: '18px', border: '1px solid #e6f4f1', position: 'relative', minHeight: '320px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', padding: '8px 12px', borderRadius: '999px', fontSize: '11px', fontWeight: 700, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '8px', height: '8px', background: '#14b8a6', borderRadius: '50%' }} /> PASUYO.PH MAP
                </div>
                <div style={{ background: '#0f172a', color: '#ffffff', padding: '6px 10px', borderRadius: '999px', fontSize: '10px', fontWeight: 700, letterSpacing: '0.06em' }}>MINDORO</div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0', margin: '28px 0', position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '12px', background: '#0d9488', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: '12px' }}>P</div>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 800, color: '#0f172a' }}>PICKUP</div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>Preferred store / tindahan</div>
                  </div>
                  <div style={{ marginLeft: 'auto', background: '#ffffff', border: '1px solid #ccfbf1', padding: '6px 10px', borderRadius: '10px', fontSize: '11px', color: '#0f766e', fontWeight: 600 }}>Calapan area</div>
                </div>

                <div style={{ marginLeft: '17px', width: '2px', height: '28px', background: 'repeating-linear-gradient(to bottom, #99f6e0 0 6px, transparent 6px 12px)' }} />

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '12px', background: '#ffffff', border: '1px solid #e2e8f0', display: 'grid', placeItems: 'center', fontSize: '16px' }}>🏍️</div>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 800, color: '#0f172a' }}>RIDER ON ROUTE</div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>Pickup → Delivery flow (UI only)</div>
                  </div>
                  <div style={{ marginLeft: 'auto', display: 'flex', gap: '4px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#14b8a6' }} />
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#5eead4' }} />
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ccfbf1' }} />
                  </div>
                </div>

                <div style={{ marginLeft: '17px', width: '2px', height: '28px', background: 'repeating-linear-gradient(to bottom, #99f6e0 0 6px, transparent 6px 12px)' }} />

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '12px', background: '#0f172a', color: '#fff', display: 'grid', placeItems: 'center', fontSize: '14px' }}>⌖</div>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 800, color: '#0f172a' }}>DELIVERY</div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>Bahay / recipient address</div>
                  </div>
                  <div style={{ marginLeft: 'auto', background: '#f0fdfa', border: '1px solid #ccfbf1', padding: '6px 10px', borderRadius: '10px', fontSize: '11px', color: '#0f766e', fontWeight: 600 }}>Naujan to Bulalacao</div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '12px' }}>
                  <div style={{ fontSize: '10px', letterSpacing: '0.08em', color: '#94a3b8', fontWeight: 700 }}>STATUS</div>
                  <div style={{ fontSize: '13px', fontWeight: 800, color: '#0f172a', marginTop: '2px' }}>Waiting for Rider</div>
                  <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>Frontend presentation</div>
                </div>
                <div style={{ background: '#0f172a', borderRadius: '14px', padding: '12px', color: '#ffffff' }}>
                  <div style={{ fontSize: '10px', letterSpacing: '0.08em', color: '#94a3b8', fontWeight: 700 }}>SERVICE</div>
                  <div style={{ fontSize: '13px', fontWeight: 800, marginTop: '2px' }}>PasaBuy • Pickup • Deliver</div>
                  <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '2px' }}>Oriental Mindoro only</div>
                </div>
              </div>

              <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '140px', height: '140px', borderRadius: '50%', background: 'radial-gradient(circle, #ccfbf1 0%, transparent 70%)', pointerEvents: 'none' }} />
            </div>

            <div style={{ display: 'flex', gap: '8px', marginTop: '14px' }}>
              <div style={{ flex: 1, background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '10px 12px' }}>
                <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 600 }}>No fake tracking</div>
                <div style={{ fontSize: '12px', color: '#0f172a', fontWeight: 700 }}>UI concept only</div>
              </div>
              <div style={{ flex: 1, background: '#f0fdfa', border: '1px solid #ccfbf1', borderRadius: '14px', padding: '10px 12px' }}>
                <div style={{ fontSize: '11px', color: '#0f766e', fontWeight: 700 }}>Built for</div>
                <div style={{ fontSize: '12px', color: '#0f172a', fontWeight: 700 }}>Mindoreños</div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (min-width: 900px) {
            .hero-grid { grid-template-columns: 1.1fr 0.9fr !important; align-items: center; padding: 72px 20px 48px !important; }
          }
        `}</style>
      </section>

      {/* QUICK ACTIONS */}
      <section style={{ maxWidth: '1120px', margin: '0 auto', padding: '28px 20px 12px' }}>
        <div style={{ display: 'grid', gap: '14px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <Link to="/customer" style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '22px', padding: '20px', textDecoration: 'none', boxShadow: '0 8px 24px rgba(15,23,42,0.04)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '14px', background: '#f0fdfa', border: '1px solid #ccfbf1', display: 'grid', placeItems: 'center', fontSize: '20px' }}>🛒</div>
              <span style={{ background: '#0f172a', color: '#fff', padding: '6px 10px', borderRadius: '999px', fontSize: '10px', fontWeight: 800, letterSpacing: '0.06em' }}>CUSTOMER</span>
            </div>
            <div>
              <div style={{ fontSize: '18px', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.02em' }}>Magpasuyo</div>
              <div style={{ fontSize: '13px', color: '#64748b', marginTop: '4px', lineHeight: 1.5 }}>Magpabili, magpa-pickup, at magpa-deliver. Pumili ng tindahan at delivery address.</div>
            </div>
            <div style={{ marginTop: 'auto', fontSize: '13px', fontWeight: 800, color: '#0d9488' }}>Go to Customer →</div>
          </Link>

          <Link to="/rider" style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '22px', padding: '20px', textDecoration: 'none', boxShadow: '0 8px 24px rgba(15,23,42,0.04)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '14px', background: '#0f172a', color: '#fff', display: 'grid', placeItems: 'center', fontSize: '20px' }}>🏍️</div>
              <span style={{ background: '#f0fdfa', color: '#0f766e', border: '1px solid #ccfbf1', padding: '6px 10px', borderRadius: '999px', fontSize: '10px', fontWeight: 800 }}>RIDER</span>
            </div>
            <div>
              <div style={{ fontSize: '18px', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.02em' }}>Maging Rider</div>
              <div style={{ fontSize: '13px', color: '#64748b', marginTop: '4px', lineHeight: 1.5 }}>Tingnan ang available requests, mag-accept, at i-manage ang delivery status.</div>
            </div>
            <div style={{ marginTop: 'auto', fontSize: '13px', fontWeight: 800, color: '#0f172a' }}>Go to Rider →</div>
          </Link>

          <Link to="/store" style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '22px', padding: '20px', textDecoration: 'none', boxShadow: '0 8px 24px rgba(15,23,42,0.04)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '14px', background: '#ffffff', border: '1px solid #e2e8f0', display: 'grid', placeItems: 'center', fontSize: '20px' }}>🏪</div>
              <span style={{ background: '#ffffff', color: '#475569', border: '1px solid #e2e8f0', padding: '6px 10px', borderRadius: '999px', fontSize: '10px', fontWeight: 800 }}>STORE</span>
            </div>
            <div>
              <div style={{ fontSize: '18px', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.02em' }}>Para sa Store</div>
              <div style={{ fontSize: '13px', color: '#64748b', marginTop: '4px', lineHeight: 1.5 }}>I-register ang tindahan, i-manage ang impormasyon, at magdagdag ng produkto.</div>
            </div>
            <div style={{ marginTop: 'auto', fontSize: '13px', fontWeight: 800, color: '#475569' }}>Go to Store →</div>
          </Link>
        </div>
      </section>

      {/* PAANO GUMAGANA */}
      <section style={{ maxWidth: '1120px', margin: '0 auto', padding: '32px 20px' }}>
        <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '28px', padding: '28px 20px', boxShadow: '0 8px 24px rgba(15,23,42,0.04)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '22px' }}>
            <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.12em', color: '#0d9488' }}>PAANO GUMAGANA</div>
            <h2 style={{ fontSize: '28px', fontWeight: 900, letterSpacing: '-0.03em', color: '#0f172a', margin: 0 }}>Simple lang. Walang hassle.</h2>
            <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>Honest flow — frontend presentation lang. Backend integration susunod pa.</p>
          </div>

          <div style={{ display: 'grid', gap: '12px' }} className="steps-grid">
            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '20px', padding: '18px', display: 'flex', gap: '14px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '14px', background: '#0d9488', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 900, fontSize: '13px', flexShrink: 0 }}>01</div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a' }}>Gumawa ng request</div>
                <div style={{ fontSize: '13px', color: '#64748b', marginTop: '4px' }}>Ilagay ang item, quantity, tindahan, at delivery address na may map pin.</div>
              </div>
            </div>
            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '20px', padding: '18px', display: 'flex', gap: '14px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '14px', background: '#0f172a', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 900, fontSize: '13px', flexShrink: 0 }}>02</div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a' }}>Makahanap / makatanggap ng rider</div>
                <div style={{ fontSize: '13px', color: '#64748b', marginTop: '4px' }}>Makikita ng rider ang request. Kapag na-accept, magbabago ang status.</div>
              </div>
            </div>
            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '20px', padding: '18px', display: 'flex', gap: '14px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '14px', background: '#ffffff', border: '1px solid #e2e8f0', display: 'grid', placeItems: 'center', fontWeight: 900, fontSize: '13px', flexShrink: 0 }}>03</div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a' }}>Matanggap ang delivery</div>
                <div style={{ fontSize: '13px', color: '#64748b', marginTop: '4px' }}>Buying → On the Way → Delivered. Walang fake tracking.</div>
              </div>
            </div>
          </div>

          <style>{`@media(min-width:760px){ .steps-grid{ grid-template-columns: repeat(3,1fr) !important; } }`}</style>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ maxWidth: '1120px', margin: '0 auto', padding: '12px 20px 28px' }}>
        <div style={{ display: 'grid', gap: '14px' }} className="features-grid">
          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '24px', padding: '22px' }}>
            <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.1em', color: '#0d9488' }}>CUSTOMER</div>
            <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#0f172a', marginTop: '6px' }}>Magpasuyo nang madali</h3>
            <div style={{ marginTop: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Magpasuyo','Magpabili','Magpa-pickup','Magpa-deliver'].map(t=>(
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#334155' }}>
                  <span style={{ width: '24px', height: '24px', borderRadius: '8px', background: '#f0fdfa', border: '1px solid #ccfbf1', display: 'grid', placeItems: 'center', fontSize: '11px' }}>✓</span>{t}
                </div>
              ))}
            </div>
            <Link to="/customer" style={{ marginTop: '18px', display: 'inline-flex', background: '#0d9488', color: '#fff', padding: '10px 16px', borderRadius: '999px', fontSize: '12px', fontWeight: 800, textDecoration: 'none' }}>Go to Customer</Link>
          </div>

          <div style={{ background: '#0f172a', borderRadius: '24px', padding: '22px', color: '#ffffff' }}>
            <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.1em', color: '#5eead4' }}>RIDER</div>
            <h3 style={{ fontSize: '18px', fontWeight: 900, marginTop: '6px' }}>Kumita sa biyahe</h3>
            <div style={{ marginTop: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Register','View available requests','Accept delivery','Manage delivery status'].map(t=>(
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#cbd5e1' }}>
                  <span style={{ width: '24px', height: '24px', borderRadius: '8px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', display: 'grid', placeItems: 'center', fontSize: '11px' }}>›</span>{t}
                </div>
              ))}
            </div>
            <Link to="/rider" style={{ marginTop: '18px', display: 'inline-flex', background: '#ffffff', color: '#0f172a', padding: '10px 16px', borderRadius: '999px', fontSize: '12px', fontWeight: 800, textDecoration: 'none' }}>Go to Rider</Link>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '24px', padding: '22px' }}>
            <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.1em', color: '#64748b' }}>STORE</div>
            <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#0f172a', marginTop: '6px' }}>Para sa lokal na tindahan</h3>
            <div style={{ marginTop: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Register store','Manage store information','Add products (no price display)'].map(t=>(
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#334155' }}>
                  <span style={{ width: '24px', height: '24px', borderRadius: '8px', background: '#f8fafc', border: '1px solid #e2e8f0', display: 'grid', placeItems: 'center', fontSize: '11px' }}>•</span>{t}
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '8px', marginTop: '18px' }}>
              <Link to="/store" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', color: '#0f172a', padding: '10px 16px', borderRadius: '999px', fontSize: '12px', fontWeight: 700, textDecoration: 'none' }}>My Store</Link>
              <Link to="/stores" style={{ background: '#ffffff', border: '1px solid #e2e8f0', color: '#475569', padding: '10px 16px', borderRadius: '999px', fontSize: '12px', fontWeight: 700, textDecoration: 'none' }}>Browse Stores</Link>
            </div>
          </div>
        </div>
        <style>{`@media(min-width:900px){ .features-grid{ grid-template-columns: repeat(3,1fr) !important; } }`}</style>
      </section>

      {/* ORIENTAL MINDORO COVERAGE */}
      <section style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 20px 28px' }}>
        <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #0f766e 100%)', borderRadius: '28px', padding: '26px 20px', color: '#ffffff', position: 'relative', overflow: 'hidden' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-flex', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', padding: '6px 12px', borderRadius: '999px', fontSize: '10px', fontWeight: 800, letterSpacing: '0.12em', alignSelf: 'flex-start' }}>ORIENTAL MINDORO COVERAGE</div>
            <h3 style={{ fontSize: '22px', fontWeight: 900, letterSpacing: '-0.02em', margin: 0 }}>Gawa para sa buong Oriental Mindoro</h3>
            <p style={{ fontSize: '13px', color: '#cbd5e1', maxWidth: '560px', lineHeight: 1.6, margin: 0 }}>Gumagamit ng totoong listahan mula sa src/data/orientalMindoro.js. Walang imbentong lokasyon. Simula sa Calapan — palawak sa lahat ng munisipyo.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
              {featuredMunicipalities.map(name=>(
                <span key={name} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.12)', padding: '7px 12px', borderRadius: '999px', fontSize: '11px', fontWeight: 600 }}>{name}</span>
              ))}
              <span style={{ background: '#ffffff', color: '#0f172a', padding: '7px 12px', borderRadius: '999px', fontSize: '11px', fontWeight: 800 }}>+ {municipalities.length - featuredMunicipalities.length} more</span>
            </div>
          </div>
          <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(45,212,191,0.25) 0%, transparent 70%)' }} />
          <div style={{ position: 'absolute', bottom: '-60px', left: '-40px', width: '260px', height: '260px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)' }} />
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 20px 56px' }}>
        <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '28px', padding: '32px 20px', textAlign: 'center', boxShadow: '0 12px 32px rgba(15,23,42,0.06)' }}>
          <h2 style={{ fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 900, letterSpacing: '-0.03em', color: '#0f172a', lineHeight: 1, margin: 0 }}>
            May kailangan ka?
            <br />
            <span style={{ color: '#0d9488' }}>Pasuyo mo lang.</span>
          </h2>
          <p style={{ fontSize: '14px', color: '#64748b', marginTop: '12px' }}>Walang fake data, walang fake stats. Frontend presentation lang — handa na para sa Supabase integration.</p>
          <div style={{ marginTop: '22px', display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/customer" style={{ background: '#0d9488', color: '#fff', padding: '16px 28px', borderRadius: '999px', fontWeight: 900, fontSize: '14px', letterSpacing: '0.04em', textDecoration: 'none', boxShadow: '0 10px 24px rgba(13,148,136,0.3)' }}>BOOK PASABUY</Link>
            <Link to="/stores" style={{ background: '#ffffff', border: '1px solid #e2e8f0', color: '#0f172a', padding: '16px 28px', borderRadius: '999px', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}>BROWSE STORES</Link>
          </div>
          <div style={{ marginTop: '16px', display: 'flex', gap: '12px', justifyContent: 'center', fontSize: '11px', color: '#94a3b8', fontWeight: 600, flexWrap: 'wrap' }}>
            <span>/customer</span><span>•</span><span>/rider/register</span><span>•</span><span>/store</span><span>•</span><span>/stores</span>
          </div>
        </div>
      </section>
    </div>
  )
}

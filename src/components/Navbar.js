import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav style={{
      background: 'var(--fc-surface)',
      borderBottom: '1px solid var(--fc-border)',
      padding: '0 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '52px'
    }}>
      <Link to="/" style={{
        fontFamily: 'Barlow Condensed, sans-serif',
        fontWeight: 800,
        fontSize: '22px',
        letterSpacing: '1px',
        color: 'var(--fc-accent)'
      }}>
        LEGACY<span style={{ color: 'var(--fc-accent2)' }}>GAMING</span>.GG
      </Link>

      <div style={{ display: 'flex', gap: '4px' }}>
        {[
          { path: '/', label: 'Home' },
          { path: '/tournaments', label: 'Tournaments' },
          { path: '/leagues', label: 'Leagues' },
          { path: '/login', label: 'Login' }
        ].map(({ path, label }) => (
          <Link key={path} to={path} style={{
            background: location.pathname === path ? 'rgba(0,212,170,0.1)' : 'none',
            color: location.pathname === path ? 'var(--fc-accent)' : 'var(--fc-muted)',
            fontFamily: 'Barlow Condensed, sans-serif',
            fontWeight: 600,
            fontSize: '13px',
            letterSpacing: '0.5px',
            padding: '6px 14px',
            borderRadius: '6px',
            textTransform: 'uppercase',
            transition: 'all 0.15s'
          }}>
            {label}
          </Link>
        ))}
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        background: 'var(--fc-card)',
        border: '1px solid var(--fc-border)',
        borderRadius: '20px',
        padding: '4px 12px 4px 4px',
        fontSize: '13px',
        fontWeight: 500
      }}>
        <div style={{
          width: '26px',
          height: '26px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--fc-accent), #00a87e)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Barlow Condensed, sans-serif',
          fontWeight: 700,
          fontSize: '11px',
          color: '#000'
        }}>JD</div>
        JDavids
      </div>
    </nav>
  );
}

export default Navbar;
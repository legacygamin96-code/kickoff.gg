import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: '18px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '8px' }}>
          Dashboard
        </h1>
        <button style={{ background: 'var(--fc-accent)', color: '#000', fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', padding: '7px 16px', borderRadius: '6px', border: 'none' }}>
          + Join Tournament
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px', marginBottom: '24px' }}>
        {[
          { label: 'Active Tournaments', value: '4', sub: '2 open for registration' },
          { label: 'Registered Players', value: '128', sub: '+12 this week' },
          { label: 'Your Rank', value: '#7', sub: 'Division 1 League', gold: true },
          { label: 'Your Record', value: '14W', sub: '4L · 2D · 78% win rate' },
        ].map((s, i) => (
          <div key={i} style={{ background: 'var(--fc-card)', border: '1px solid var(--fc-border)', borderRadius: '10px', padding: '14px 16px' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.8px', color: 'var(--fc-muted)', marginBottom: '6px' }}>{s.label}</div>
            <div style={{ fontFamily: 'Barlow Condensed', fontSize: '28px', fontWeight: 800, color: s.gold ? 'var(--fc-gold)' : 'var(--fc-accent)', lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontSize: '12px', color: 'var(--fc-muted)', marginTop: '4px' }}>{s.sub}</div>
          </div>
        ))}
      </div>

      <h2 style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: '18px', textTransform: 'uppercase', marginBottom: '14px' }}>Recent Activity</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {[
          { name: 'EAFC 25 Saturday Cup', badge: 'Live', badgeColor: 'var(--fc-accent2)', players: '16/16 players', info: 'QF in progress', btnText: 'View Bracket', path: '/tournaments' },
          { name: 'Division 1 League — Season 3', badge: 'League', badgeColor: 'var(--fc-gold)', players: '10 players', info: 'Matchday 8 of 18', btnText: 'View Table', path: '/leagues' },
          { name: 'Weekend Qualifier #4', badge: 'Open', badgeColor: 'var(--fc-accent)', players: '6/32 registered', info: 'Starts Sat 14 Jun', btnText: 'Register', path: '/tournaments' },
        ].map((t, i) => (
          <div key={i} style={{ background: 'var(--fc-card)', border: '1px solid var(--fc-border)', borderRadius: '10px', padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: '16px', marginBottom: '4px' }}>{t.name}</div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', padding: '2px 8px', borderRadius: '4px', color: t.badgeColor, border: `1px solid ${t.badgeColor}`, background: `${t.badgeColor}22` }}>{t.badge}</span>
                <span style={{ fontSize: '12px', color: 'var(--fc-muted)' }}>{t.players}</span>
                <span style={{ fontSize: '12px', color: 'var(--fc-muted)' }}>{t.info}</span>
              </div>
            </div>
            <Link to={t.path}>
              <button style={{ background: i === 2 ? 'var(--fc-accent)' : 'transparent', color: i === 2 ? '#000' : 'var(--fc-muted)', fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', padding: '7px 16px', borderRadius: '6px', border: '1px solid var(--fc-border)' }}>{t.btnText}</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
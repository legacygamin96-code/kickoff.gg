import React from 'react';

function Leagues() {
  const players = [
    { pos: 1, name: 'xStriker99', p: 8, w: 7, d: 1, l: 0, gd: '+18', pts: 22, top: true },
    { pos: 2, name: 'GoalMachine', p: 8, w: 6, d: 0, l: 2, gd: '+11', pts: 18, top2: true },
    { pos: 3, name: 'EliteFC', p: 8, w: 5, d: 1, l: 2, gd: '+7', pts: 16, top2: true },
    { pos: 4, name: 'SkillMoves', p: 8, w: 4, d: 3, l: 1, gd: '+5', pts: 15 },
    { pos: 5, name: 'FutChamp', p: 8, w: 4, d: 2, l: 2, gd: '+4', pts: 14 },
    { pos: 6, name: 'NightOwlFC', p: 8, w: 4, d: 2, l: 2, gd: '+3', pts: 14 },
    { pos: 7, name: 'JDavids', p: 8, w: 4, d: 2, l: 2, gd: '+3', pts: 14, me: true },
    { pos: 8, name: 'ProGamer22', p: 8, w: 3, d: 2, l: 3, gd: '-2', pts: 11 },
    { pos: 9, name: 'FifaKing', p: 8, w: 1, d: 1, l: 6, gd: '-12', pts: 4, rel: true },
    { pos: 10, name: 'Speedster7', p: 8, w: 0, d: 1, l: 7, gd: '-21', pts: 1, rel: true },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: '18px', textTransform: 'uppercase' }}>Leagues</h1>
      </div>

      <div style={{ display: 'flex', gap: '6px', marginBottom: '16px' }}>
        {['Division 1', 'Division 2', 'Division 3'].map((t, i) => (
          <button key={i} style={{ background: i === 0 ? 'rgba(0,212,170,0.1)' : 'var(--fc-card)', border: i === 0 ? '1px solid rgba(0,212,170,0.4)' : '1px solid var(--fc-border)', color: i === 0 ? 'var(--fc-accent)' : 'var(--fc-muted)', fontFamily: 'Barlow Condensed', fontWeight: 600, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px', padding: '5px 14px', borderRadius: '20px' }}>{t}</button>
        ))}
      </div>

      <h2 style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: '16px', textTransform: 'uppercase', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ display: 'inline-block', width: '3px', height: '16px', background: 'var(--fc-accent)', borderRadius: '2px' }}></span>
        Division 1 — Season 3 Standings
      </h2>

      <div style={{ background: 'var(--fc-card)', border: '1px solid var(--fc-border)', borderRadius: '10px', overflow: 'hidden', marginBottom: '16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '32px 1fr 40px 40px 40px 40px 50px 60px', padding: '8px 14px', background: 'var(--fc-surface)', borderBottom: '1px solid var(--fc-border)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.8px', textTransform: 'uppercase', color: 'var(--fc-muted)', gap: '4px' }}>
          <div>#</div><div>Player</div><div style={{textAlign:'center'}}>P</div><div style={{textAlign:'center'}}>W</div><div style={{textAlign:'center'}}>D</div><div style={{textAlign:'center'}}>L</div><div style={{textAlign:'center'}}>GD</div><div style={{textAlign:'center'}}>PTS</div>
        </div>

        {players.map((p, i) => (
          <div key={i} style={{
            display: 'grid',
            gridTemplateColumns: '32px 1fr 40px 40px 40px 40px 50px 60px',
            padding: '9px 14px',
            borderBottom: i < players.length - 1 ? '1px solid var(--fc-border)' : 'none',
            fontSize: '13px',
            fontWeight: 500,
            alignItems: 'center',
            gap: '4px',
            background: p.me ? 'rgba(0,212,170,0.05)' : p.rel ? 'rgba(192,57,43,0.04)' : 'transparent',
            borderLeft: p.me ? '2px solid rgba(0,212,170,0.5)' : p.rel ? '2px solid rgba(192,57,43,0.4)' : 'none',
          }}>
            <div style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: '14px', textAlign: 'center', color: p.top ? 'var(--fc-accent)' : p.top2 ? 'var(--fc-gold)' : p.rel ? '#c0392b' : 'var(--fc-muted)' }}>{p.pos}</div>
            <div style={{ fontWeight: 600, color: p.me ? 'var(--fc-accent)' : 'var(--fc-text)' }}>
              {p.name} {p.me && <span style={{ fontSize: '10px', color: 'var(--fc-muted)' }}>(you)</span>}
            </div>
            {[p.p, p.w, p.d, p.l, p.gd].map((val, j) => (
              <div key={j} style={{ textAlign: 'center', color: 'var(--fc-muted)', fontSize: '12px' }}>{val}</div>
            ))}
            <div style={{ textAlign: 'center', fontFamily: 'Barlow Condensed', fontWeight: 800, fontSize: '15px', color: p.rel ? 'var(--fc-muted)' : 'var(--fc-accent)' }}>{p.pts}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '16px', fontSize: '11px', color: 'var(--fc-muted)' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span style={{ display: 'inline-block', width: '10px', height: '10px', background: 'rgba(0,212,170,0.3)', borderRadius: '2px' }}></span> Promotion zone
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span style={{ display: 'inline-block', width: '10px', height: '10px', background: 'rgba(192,57,43,0.3)', borderRadius: '2px' }}></span> Relegation zone
        </span>
      </div>
    </div>
  );
}

export default Leagues;
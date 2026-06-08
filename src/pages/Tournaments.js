import React from 'react';

function Tournaments() {
  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: '18px', textTransform: 'uppercase' }}>Tournaments</h1>
      </div>

      <div style={{ display: 'flex', gap: '6px', marginBottom: '16px' }}>
        {['All', 'Open', 'Live', 'Completed'].map((t, i) => (
          <button key={i} style={{ background: i === 0 ? 'rgba(0,212,170,0.1)' : 'var(--fc-card)', border: i === 0 ? '1px solid rgba(0,212,170,0.4)' : '1px solid var(--fc-border)', color: i === 0 ? 'var(--fc-accent)' : 'var(--fc-muted)', fontFamily: 'Barlow Condensed', fontWeight: 600, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px', padding: '5px 14px', borderRadius: '20px' }}>{t}</button>
        ))}
      </div>

      <h2 style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: '16px', textTransform: 'uppercase', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ display: 'inline-block', width: '3px', height: '16px', background: 'var(--fc-accent)', borderRadius: '2px' }}></span>
        EAFC 25 Saturday Cup — Bracket
      </h2>

      <div style={{ background: 'rgba(240,180,41,0.08)', border: '1px solid rgba(240,180,41,0.25)', borderRadius: '10px', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
        <span style={{ fontSize: '28px', color: 'var(--fc-gold)' }}>🏆</span>
        <div>
          <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.8px', color: 'var(--fc-gold)', marginBottom: '2px' }}>Last Champion</div>
          <div style={{ fontFamily: 'Barlow Condensed', fontWeight: 800, fontSize: '20px' }}>xStriker99</div>
        </div>
      </div>

      <div style={{ overflowX: 'auto', paddingBottom: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', minWidth: '580px' }}>

          <div>
            <div style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: '11px', letterSpacing: '0.8px', textTransform: 'uppercase', color: 'var(--fc-muted)', textAlign: 'center', marginBottom: '10px' }}>Quarter Finals</div>
            {[
              { p1: 'JDavids', s1: 3, p2: 'FifaKing', s2: 1, done: true },
              { p1: 'xStriker99', s1: 4, p2: 'ProGamer22', s2: 2, done: true },
              { p1: 'GoalMachine', s1: 2, p2: 'SkillMoves', s2: 0, done: true },
              { p1: 'EliteFC', s1: 1, p2: 'Speedster7', s2: 1, done: true },
            ].map((m, i) => (
              <div key={i} style={{ background: 'var(--fc-card)', border: '1px solid var(--fc-border)', borderRadius: '8px', width: '140px', overflow: 'hidden', margin: '6px 8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 10px', fontSize: '13px', fontWeight: 500, color: 'var(--fc-accent)', borderBottom: '1px solid var(--fc-border)' }}>
                  <span>{m.p1}</span><span style={{ fontFamily: 'Barlow Condensed', fontWeight: 700 }}>{m.s1}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 10px', fontSize: '13px', fontWeight: 500, color: 'var(--fc-muted)' }}>
                  <span>{m.p2}</span><span style={{ fontFamily: 'Barlow Condensed', fontWeight: 700 }}>{m.s2}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', padding: '30px 0', marginTop: '20px' }}>
            <div style={{ width: '16px', height: '76px', borderRight: '1px solid var(--fc-border)', borderTop: '1px solid var(--fc-border)', borderBottom: '1px solid var(--fc-border)' }}></div>
            <div style={{ width: '16px', height: '76px', borderRight: '1px solid var(--fc-border)', borderTop: '1px solid var(--fc-border)', borderBottom: '1px solid var(--fc-border)', marginTop: '4px' }}></div>
          </div>

          <div style={{ marginTop: '10px' }}>
            <div style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: '11px', letterSpacing: '0.8px', textTransform: 'uppercase', color: 'var(--fc-muted)', textAlign: 'center', marginBottom: '10px' }}>Semi Finals</div>
            <div style={{ marginTop: '16px' }}>
              <div style={{ background: 'var(--fc-card)', border: '1px solid var(--fc-border)', borderRadius: '8px', width: '140px', overflow: 'hidden', margin: '6px 8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 10px', fontSize: '13px', color: 'var(--fc-accent)', borderBottom: '1px solid var(--fc-border)' }}>
                  <span>JDavids</span><span style={{ fontFamily: 'Barlow Condensed', fontWeight: 700 }}>2</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 10px', fontSize: '13px', color: 'var(--fc-muted)' }}>
                  <span>xStriker99</span><span style={{ fontFamily: 'Barlow Condensed', fontWeight: 700 }}>2</span>
                </div>
              </div>
            </div>
            <div style={{ marginTop: '52px' }}>
              <div style={{ background: 'var(--fc-card)', border: '1px solid var(--fc-border)', borderRadius: '8px', width: '140px', overflow: 'hidden', margin: '6px 8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 10px', fontSize: '13px', color: 'var(--fc-accent)', borderBottom: '1px solid var(--fc-border)' }}>
                  <span>GoalMachine</span><span style={{ fontFamily: 'Barlow Condensed', fontWeight: 700 }}>3</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 10px', fontSize: '13px', color: 'var(--fc-muted)' }}>
                  <span>EliteFC</span><span style={{ fontFamily: 'Barlow Condensed', fontWeight: 700 }}>1</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px 0', marginTop: '20px' }}>
            <div style={{ width: '16px', height: '120px', borderRight: '1px solid rgba(0,212,170,0.4)', borderTop: '1px solid rgba(0,212,170,0.4)', borderBottom: '1px solid rgba(0,212,170,0.4)' }}></div>
          </div>

          <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: '11px', letterSpacing: '0.8px', textTransform: 'uppercase', color: 'var(--fc-muted)', textAlign: 'center', marginBottom: '10px' }}>Final</div>
            <div style={{ marginTop: '60px' }}>
              <div style={{ background: 'var(--fc-card)', border: '1px solid rgba(0,212,170,0.4)', borderRadius: '8px', width: '140px', overflow: 'hidden', margin: '6px 8px' }}>
                <div style={{ padding: '6px 10px', fontSize: '12px', color: 'var(--fc-muted)', fontStyle: 'italic', borderBottom: '1px solid var(--fc-border)' }}>TBD</div>
                <div style={{ padding: '6px 10px', fontSize: '12px', color: 'var(--fc-muted)', fontStyle: 'italic' }}>TBD</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Tournaments;
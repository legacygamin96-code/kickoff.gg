import React, { useState } from 'react';
import { supabase } from '../supabase';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleAuth = async () => {
    setLoading(true);
    setMessage('');

    if (isLogin) {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setMessage(error.message);
      else setMessage('Logged in successfully!');
    } else {
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) {
        setMessage(error.message);
      } else {
        const { error: profileError } = await supabase
          .from('profiles')
          .insert([{ id: data.user.id, username }]);
        if (profileError) setMessage(profileError.message);
        else setMessage('Account created! Please check your email to verify.');
      }
    }
    setLoading(false);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 'calc(100vh - 52px)' }}>
      <div style={{ background: 'var(--fc-card)', border: '1px solid var(--fc-border)', borderRadius: '12px', padding: '32px 28px', width: '100%', maxWidth: '360px', textAlign: 'center' }}>

        <div style={{ fontFamily: 'Barlow Condensed', fontWeight: 800, fontSize: '28px', color: 'var(--fc-accent)', marginBottom: '4px' }}>
          LEGACY<span style={{ color: 'var(--fc-accent2)' }}>GAMING</span>.GG
        </div>
        <div style={{ fontSize: '13px', color: 'var(--fc-muted)', marginBottom: '24px' }}>
          {isLogin ? 'Sign in to your account' : 'Create your account'}
        </div>

        {!isLogin && (
          <div style={{ marginBottom: '14px', textAlign: 'left' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.6px', color: 'var(--fc-muted)', marginBottom: '6px' }}>Username</div>
            <input
              type="text"
              placeholder="Choose a username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              style={{ width: '100%', background: 'var(--fc-surface)', border: '1px solid var(--fc-border)', borderRadius: '7px', padding: '9px 12px', fontFamily: 'Barlow, sans-serif', fontSize: '13px', color: 'var(--fc-text)', outline: 'none' }}
            />
          </div>
        )}

        <div style={{ marginBottom: '14px', textAlign: 'left' }}>
          <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.6px', color: 'var(--fc-muted)', marginBottom: '6px' }}>Email</div>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ width: '100%', background: 'var(--fc-surface)', border: '1px solid var(--fc-border)', borderRadius: '7px', padding: '9px 12px', fontFamily: 'Barlow, sans-serif', fontSize: '13px', color: 'var(--fc-text)', outline: 'none' }}
          />
        </div>

        <div style={{ marginBottom: '14px', textAlign: 'left' }}>
          <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.6px', color: 'var(--fc-muted)', marginBottom: '6px' }}>Password</div>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ width: '100%', background: 'var(--fc-surface)', border: '1px solid var(--fc-border)', borderRadius: '7px', padding: '9px 12px', fontFamily: 'Barlow, sans-serif', fontSize: '13px', color: 'var(--fc-text)', outline: 'none' }}
          />
        </div>

        {message && (
          <div style={{ fontSize: '12px', padding: '8px 12px', borderRadius: '6px', marginBottom: '12px', background: message.includes('success') || message.includes('verify') ? 'rgba(0,212,170,0.1)' : 'rgba(192,57,43,0.1)', color: message.includes('success') || message.includes('verify') ? 'var(--fc-accent)' : '#e74c3c' }}>
            {message}
          </div>
        )}

        <button
          onClick={handleAuth}
          disabled={loading}
          style={{ width: '100%', background: loading ? 'var(--fc-muted)' : 'var(--fc-accent)', color: '#000', fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', padding: '10px', borderRadius: '8px', border: 'none', marginTop: '6px', cursor: loading ? 'not-allowed' : 'pointer' }}>
          {loading ? 'Please wait...' : isLogin ? 'Sign In' : 'Create Account'}
        </button>

        <div style={{ fontSize: '12px', color: 'var(--fc-muted)', marginTop: '16px' }}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span onClick={() => { setIsLogin(!isLogin); setMessage(''); }} style={{ color: 'var(--fc-accent)', cursor: 'pointer' }}>
            {isLogin ? 'Register here' : 'Sign in'}
          </span>
        </div>

      </div>
    </div>
  );
}

export default Login;
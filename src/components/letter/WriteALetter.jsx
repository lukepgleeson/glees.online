import React, { useState } from 'react';
import writeLetterImg from '../../assets/WriteALetter.png';
import CloseButton from '../CloseButton.jsx';
import '../../styles/letter/Letter.css';

export default function WriteALetter({ onClose }) {
  const [form, setForm] = useState({ title: '', text: '', from: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.text.trim() || !form.from.trim()) return;
    setStatus('submitting');
    try {
      const res = await fetch('/api/letters', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setTimeout(onClose, 1200);
    } catch {
      setStatus('error');
    }
  };

  const done = status === 'success';
  const busy = status === 'submitting';

  return (
    <div className="letter-overlay" onClick={onClose}>
      <CloseButton onClick={onClose} />
      <form className="letter-wrap" onSubmit={handleSubmit} onClick={e => e.stopPropagation()}>
        <img src={writeLetterImg} alt="Write a letter" className="letter-bg" />

        <input
          className="letter-title-input letter-title"
          type="text"
          maxLength={80}
          placeholder="Title..."
          value={form.title}
          onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
          disabled={busy || done}
        />

        <textarea
          className="letter-body-textarea"
          maxLength={1000}
          placeholder="Your message..."
          value={form.text}
          onChange={e => setForm(f => ({ ...f, text: e.target.value }))}
          disabled={busy || done}
        />

        <input
          className="letter-from-input letter-from"
          type="text"
          maxLength={60}
          placeholder="Your name..."
          value={form.from}
          onChange={e => setForm(f => ({ ...f, from: e.target.value }))}
          disabled={busy || done}
        />

        {!done && (
          <button
            className="letter-submit-btn"
            type="submit"
            disabled={busy || !form.title.trim() || !form.text.trim() || !form.from.trim()}
          >
            {busy ? '...' : 'Send →'}
          </button>
        )}

        {done  && <span className="letter-status letter-success">Sent! Safe travels.</span>}
        {status === 'error' && <span className="letter-status letter-error">Failed — try again.</span>}
      </form>
    </div>
  );
}

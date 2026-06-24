export default function ViewToggle({ view, onToggle, context }) {
  const isPro = view === 'pro';
  return (
    <button
      className={`vt-wrap vt-wrap--${context}`}
      onClick={onToggle}
      aria-label={`Switch to ${isPro ? 'fun' : 'professional'} view`}
    >
      <span className={`vt-label ${!isPro ? 'vt-label--active' : ''}`}>Fun</span>
      <div className={`vt-track ${isPro ? 'vt-track--on' : ''}`}>
        <div className="vt-thumb" />
      </div>
      <span className={`vt-label ${isPro ? 'vt-label--active' : ''}`}>Profesh</span>
    </button>
  );
}

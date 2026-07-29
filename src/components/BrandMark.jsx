export default function BrandMark({ size = 'md', tone = 'light' }) {
  return (
    <div className={`brand-mark brand-mark--${size} brand-mark--${tone}`}>
      <svg viewBox="0 0 64 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M8 30h48l-4 6H12l-4-6Z" stroke="currentColor" strokeWidth="1.2" />
        <path d="M20 30V10c8 2 14 9 16 20" stroke="currentColor" strokeWidth="1.2" />
        <path d="M34 30V4c9 4 13 15 12 26" stroke="currentColor" strokeWidth="1.2" />
        <path d="M2 30h60" stroke="currentColor" strokeWidth="1.2" />
      </svg>
      <div className="brand-mark-text">
        <span className="brand-mark-eyebrow">Salt Line Voyages</span>
        <span className="brand-mark-name">Pacific Northwest</span>
      </div>
    </div>
  )
}

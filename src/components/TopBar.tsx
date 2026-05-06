"use client";

import { siteConfig } from "@/lib/config";

export default function TopBar() {
  return (
    <div style={{
      background: '#0a5b72',
      color: 'rgba(255,255,255,0.9)',
      fontSize: '13px',
      padding: '6px 0',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '8px',
      }}>
        <a href={`tel:${siteConfig.phone}`} aria-label="Call us" style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          color: 'rgba(255,255,255,0.9)', transition: 'color 0.2s',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          <span className="topbar-text">{siteConfig.phone}</span>
        </a>
        <a href={`mailto:${siteConfig.email}`} aria-label="Email us" style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          color: 'rgba(255,255,255,0.9)', transition: 'color 0.2s',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          <span className="topbar-text">{siteConfig.email}</span>
        </a>
      </div>
    </div>
  );
}

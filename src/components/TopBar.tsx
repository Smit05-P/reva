"use client";

import { siteConfig } from "@/lib/config";
import HomeIcons from "./HomeIcons";

export default function TopBar() {
  return (
    <div style={{
      background: 'rgba(10, 91, 114, 0.95)',
      color: 'rgba(255,255,255,0.9)',
      fontSize: '12px',
      padding: '8px 0',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      position: 'relative',
      zIndex: 1001,
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px',
      }}>
        <div style={{ display: 'flex', gap: '24px' }}>
          <a href={`tel:${siteConfig.phone}`} aria-label="Call us" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            color: 'rgba(255,255,255,0.9)', transition: 'color 0.2s',
            textDecoration: 'none', fontWeight: 500,
          }}>
            <HomeIcons name="Phone" size={13} strokeWidth={2.5} />
            <span>{siteConfig.phone}</span>
          </a>
          <a href={`mailto:${siteConfig.email}`} aria-label="Email us" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            color: 'rgba(255,255,255,0.9)', transition: 'color 0.2s',
            textDecoration: 'none', fontWeight: 500,
          }}>
            <HomeIcons name="Mail" size={13} strokeWidth={2.5} />
            <span>{siteConfig.email}</span>
          </a>
        </div>
        <div style={{ display: 'flex', gap: '16px', opacity: 0.8 }}>
          <span>Emergency 24/7</span>
          <span style={{ width: '1px', height: '12px', background: 'rgba(255,255,255,0.2)' }} />
          <span>Multi-Specialty Surgery</span>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import styles from "./ConditionSvgBg.module.css";

const svgPatterns: Record<string, React.ReactNode[]> = {
  piles: [
    <circle key="1" cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.15" />,
    <circle key="2" cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.12" />,
    <circle key="3" cx="50" cy="50" r="10" fill="currentColor" opacity="0.06" />,
    <path key="4" d="M30 50 Q50 20 70 50 Q50 80 30 50Z" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.1" />,
  ],
  fissure: [
    <line key="1" x1="20" y1="80" x2="80" y2="20" stroke="currentColor" strokeWidth="1.5" opacity="0.12" />,
    <line key="2" x1="30" y1="80" x2="80" y2="30" stroke="currentColor" strokeWidth="0.8" opacity="0.08" />,
    <path key="3" d="M40 10 L50 90" stroke="currentColor" strokeWidth="0.5" opacity="0.1" strokeDasharray="4 4" />,
    <path key="4" d="M20 50 Q50 40 80 50" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.1" />,
  ],
  fistula: [
    <path key="1" d="M20 50 Q35 20 50 50 Q65 80 80 50" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.12" />,
    <circle key="2" cx="20" cy="50" r="6" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.1" />,
    <circle key="3" cx="80" cy="50" r="6" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.1" />,
    <path key="4" d="M30 30 Q50 50 30 70" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.08" />,
  ],
  "pilonidal-sinus": [
    <path key="1" d="M50 20 L50 80" stroke="currentColor" strokeWidth="1" opacity="0.1" strokeDasharray="3 5" />,
    <ellipse key="2" cx="50" cy="65" rx="20" ry="12" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.12" />,
    <path key="3" d="M35 40 Q50 25 65 40" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.1" />,
    <circle key="4" cx="50" cy="65" r="4" fill="currentColor" opacity="0.06" />,
  ],
  "rectal-prolapse": [
    <circle key="1" cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.1" />,
    <circle key="2" cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />,
    <path key="3" d="M50 25 L50 75" stroke="currentColor" strokeWidth="0.8" opacity="0.1" />,
    <path key="4" d="M35 50 Q50 30 65 50 Q50 70 35 50" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.1" />,
  ],
  "anal-papilla": [
    <circle key="1" cx="50" cy="50" r="8" fill="currentColor" opacity="0.06" />,
    <circle key="2" cx="50" cy="50" r="16" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.1" />,
    <path key="3" d="M50 30 L55 50 L50 70 L45 50 Z" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.1" />,
    <circle key="4" cx="50" cy="50" r="3" fill="currentColor" opacity="0.08" />,
  ],
  "perianal-abscess": [
    <circle key="1" cx="50" cy="50" r="20" fill="currentColor" opacity="0.04" />,
    <circle key="2" cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.1" strokeDasharray="4 3" />,
    <path key="3" d="M35 35 L65 65 M65 35 L35 65" stroke="currentColor" strokeWidth="0.8" opacity="0.08" />,
    <circle key="4" cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.06" />,
  ],
  ods: [
    <rect key="1" x="30" y="30" width="40" height="40" rx="8" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.1" />,
    <path key="2" d="M40 50 L60 50" stroke="currentColor" strokeWidth="1.5" opacity="0.12" />,
    <path key="3" d="M50 40 L50 60" stroke="currentColor" strokeWidth="1.5" opacity="0.12" />,
    <circle key="4" cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.08" strokeDasharray="2 3" />,
  ],
  constipation: [
    <path key="1" d="M30 30 Q50 50 30 70" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.1" />,
    <path key="2" d="M50 20 Q70 50 50 80" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.1" />,
    <path key="3" d="M70 30 Q50 50 70 70" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.1" />,
    <circle key="4" cx="50" cy="50" r="5" fill="currentColor" opacity="0.05" />,
  ],
  generic: [
    <circle key="1" cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.2" opacity="0.05" />,
    <path key="2" d="M0 50 L100 50 M50 0 L50 100" stroke="currentColor" strokeWidth="0.2" opacity="0.05" />,
    <circle key="3" cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.2" opacity="0.05" />,
    <rect key="4" x="25" y="25" width="50" height="50" rx="25" fill="none" stroke="currentColor" strokeWidth="0.2" opacity="0.05" />,
  ],
};

export default function ConditionSvgBg({ slug }: { slug: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const elements = container.querySelectorAll(`.${styles.svgElement}`);
      elements.forEach((el, i) => {
        const htmlEl = el as HTMLElement;
        const rect = htmlEl.getBoundingClientRect();
        const vh = window.innerHeight;
        const progress = Math.max(0, Math.min(1, 1 - rect.top / vh));
        const yOffset = progress * 40 * (i % 2 === 0 ? 1 : -1);
        const rotation = progress * 30 * (i % 2 === 0 ? 1 : -1);
        const scale = 0.8 + progress * 0.4;
        htmlEl.style.transform = `translateY(${yOffset}px) rotate(${rotation}deg) scale(${scale})`;
        htmlEl.style.opacity = `${0.3 + progress * 0.7}`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const patterns = svgPatterns[slug] || svgPatterns["generic"];

  const positions = [
    { top: "5%", left: "5%", size: 120 },
    { top: "12%", right: "8%", size: 100 },
    { top: "22%", left: "15%", size: 140 },
    { top: "30%", right: "12%", size: 110 },
    { top: "40%", left: "8%", size: 130 },
    { top: "50%", right: "15%", size: 120 },
    { top: "60%", left: "12%", size: 100 },
    { top: "70%", right: "5%", size: 140 },
    { top: "80%", left: "18%", size: 110 },
    { top: "90%", right: "10%", size: 130 },
  ];

  return (
    <div ref={containerRef} className={styles.container}>
      {positions.map((pos, i) => (
        <div
          key={i}
          className={styles.svgElement}
          style={{
            position: "absolute",
            top: pos.top,
            left: "left" in pos ? pos.left : undefined,
            right: "right" in pos ? pos.right : undefined,
            width: pos.size,
            height: pos.size,
          }}
        >
          <svg
            viewBox="0 0 100 100"
            width={pos.size}
            height={pos.size}
            style={{ color: "var(--primary)" }}
          >
            {patterns[i % patterns.length]}
          </svg>
        </div>
      ))}
    </div>
  );
}

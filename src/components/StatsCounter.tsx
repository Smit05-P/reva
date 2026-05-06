"use client";

import { useEffect, useRef, useState } from "react";
import s from "./Stats.module.css";

interface StatItem { label: string; value: number; suffix: string; }

export default function StatsCounter({ stats }: { stats: StatItem[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !triggered) setTriggered(true);
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [triggered]);

  useEffect(() => {
    if (!triggered) return;
    const duration = 1500;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounts(stats.map((st) => Math.round(st.value * eased)));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [triggered, stats]);

  return (
    <section className={s.section} ref={ref}>
      <div className={`container ${s.grid}`}>
        {stats.map((st, i) => (
          <div key={st.label} className={s.item}>
            <span className={s.value}>{counts[i].toLocaleString("en-IN")}{st.suffix}</span>
            <span className={s.label}>{st.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

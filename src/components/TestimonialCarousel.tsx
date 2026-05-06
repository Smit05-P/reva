"use client";

import { useState, useEffect, useCallback } from "react";
import HomeIcons from "./HomeIcons";
import s from "./Testimonial.module.css";

interface Testimonial { name: string; condition: string; gender: string; quote: string; }

export default function TestimonialCarousel({ testimonials, title = "What Our Patients Say" }: { testimonials: Testimonial[]; title?: string; }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), [testimonials.length]);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <section className={`section ${s.section}`} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">Real stories from patients who trusted us with their care</p>
        <div className={s.wrapper}>
          <button onClick={prev} className={s.arrow} aria-label="Previous">
            <HomeIcons name="ChevronLeft" size={24} />
          </button>
          <div className={s.track}>
            {testimonials.map((t, i) => (
              i === current && (
                <div key={i} className={s.card}>
                  <div className={s.avatar}>
                    <HomeIcons name="User" size={48} />
                  </div>
                  <div className={s.stars}>★★★★★</div>
                  <p className={s.quote}>&ldquo;{t.quote}&rdquo;</p>
                  <div className={s.meta}>
                    <span className={s.name}>{t.name}</span>
                    <span className={s.condition}>{t.condition} Patient</span>
                  </div>
                </div>
              )
            ))}
          </div>
          <button onClick={next} className={s.arrow} aria-label="Next">
            <HomeIcons name="ChevronRight" size={24} />
          </button>
        </div>
        <div className={s.dots}>
          {testimonials.map((_, i) => (
            <button key={i} className={`${s.dot} ${i === current ? s.dotActive : ""}`} onClick={() => setCurrent(i)} aria-label={`Testimonial ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

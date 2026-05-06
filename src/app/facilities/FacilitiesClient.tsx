"use client";

import { useEffect } from "react";
import LucideIcon from "@/components/LucideIcon";
import s from "./facilities.module.css";

interface Facility {
  slug: string;
  title: string;
  icon: string;
  shortDesc: string;
}

export default function FacilitiesClient({ facilities }: { facilities: Facility[] }) {
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "center" }), 300);
      }
    }
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div className={s.grid}>
          {facilities.map((f) => (
            <div key={f.slug} id={f.slug} className={s.card}>
              <div className={s.iconWrap}>
                <LucideIcon name={f.icon} size={28} />
              </div>
              <h3 className={s.title}>{f.title}</h3>
              <p className={s.desc}>{f.shortDesc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

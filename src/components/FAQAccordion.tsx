"use client";

import { useState } from "react";
import HomeIcons from "./HomeIcons";
import s from "./FAQ.module.css";

interface FAQItem { q: string; a: string; }

export default function FAQAccordion({ faqs, title = "Frequently Asked Questions" }: { faqs: FAQItem[]; title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className={`section ${s.section}`}>
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">Find answers to common questions about this condition</p>
        <div className={s.list}>
          {faqs.map((faq, i) => (
            <div key={i} className={`${s.item} ${openIndex === i ? s.itemOpen : ""}`}>
              <button className={s.trigger} onClick={() => toggle(i)} aria-expanded={openIndex === i}>
                <span className={s.question}>{faq.q}</span>
                <span className={s.icon}>
                  <HomeIcons name={openIndex === i ? "Minus" : "Plus"} size={18} />
                </span>
              </button>
              <div className={s.answer} style={{ maxHeight: openIndex === i ? "500px" : "0" }}>
                <p className={s.answerText}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

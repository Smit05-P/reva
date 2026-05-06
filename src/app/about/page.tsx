import type { Metadata } from "next";
import Link from "next/link";
import { doctor } from "@/lib/config";
import s from "./about.module.css";

export const metadata: Metadata = {
  title: `About ${doctor.name} — Proctologist in Palanpur`,
  description: `${doctor.name} is a Consultant Proctologist & Anorectal Surgeon in Palanpur, Gujarat. ${doctor.qualifications}. Expert in piles, fissure, fistula & pilonidal sinus treatment.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>About {doctor.name}</h1>
          <p>{doctor.designation} · {doctor.location}</p>
        </div>
      </section>

      <section className="section">
        <div className={`container ${s.grid}`}>
          <div className={s.photoCol}>
            <div className={s.photo}>👨‍⚕️</div>
            <div className={s.infoCard}>
              <h3>{doctor.name}</h3>
              <p className={s.infoDesg}>{doctor.designation}</p>
              <p className={s.infoQual}>{doctor.qualifications}</p>
              <p className={s.infoLoc}>📍 {doctor.location}</p>
            </div>
          </div>

          <div className={s.textCol}>
            <div className={s.label}>Professional Profile</div>
            <h2>Dedicated Anorectal Specialist</h2>
            <p>{doctor.bio}</p>

            <div className={s.label} style={{ marginTop: 32 }}>Areas of Expertise</div>
            <ul className={s.expertiseList}>
              {doctor.specialties.map((sp) => (
                <li key={sp} className={s.expertiseItem}>
                  <span className={s.check}>✓</span>{sp}
                </li>
              ))}
            </ul>

            <div className={s.label} style={{ marginTop: 32 }}>Patient Philosophy</div>
            <p>
              Dr. Prajapati believes in a compassionate, patient-first approach. Every patient receives personalized attention, thorough consultation, and honest treatment advice. He ensures patients understand their condition and treatment options before proceeding.
            </p>

            <div style={{ marginTop: 32 }}>
              <Link href="/contact" className="btn-primary">Book a Consultation →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

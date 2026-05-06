import Link from "next/link";
import { siteConfig, doctor, conditions, stats, whyChooseUs, testimonials } from "@/lib/config";
import StatsCounter from "@/components/StatsCounter";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import s from "./home.module.css";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className={s.hero}>
        <div className={`container ${s.heroInner}`}>
          <div className={s.heroContent}>
            <div className={s.heroBadge}>🏥 Specialist Anorectal Care</div>
            <h1 className={s.heroTitle}>
              Expert Anorectal Care —{" "}
              <span className={s.heroHighlight}>Right Here in Palanpur</span>
            </h1>
            <p className={s.heroSub}>
              Advanced laser treatment for anorectal conditions by {doctor.name} ({doctor.qualifications}). No need to travel to big cities.
            </p>
            <div className={s.heroTags}>
              {conditions.map((c) => (
                <Link key={c.slug} href={`/${c.slug}`} className={s.heroTag}>
                  {c.icon} {c.title}
                </Link>
              ))}
            </div>
            <div className={s.heroActions}>
              <Link href="/contact" className="btn-primary">Book an Appointment →</Link>
              <Link href="/about" className="btn-outline">Meet the Doctor</Link>
            </div>
          </div>
          <div>
            <div className={s.heroCard}>
              <div className={s.heroCardIcon}>👨‍⚕️</div>
              <div className={s.heroCardName}>{doctor.name}</div>
              <div className={s.heroCardDesg}>{doctor.designation}</div>
              <div className={s.heroCardQual}>{doctor.qualifications}</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className={`section ${s.aboutPreview}`}>
        <div className={`container ${s.aboutInner}`}>
          <div className={s.aboutPhoto}>👨‍⚕️</div>
          <div>
            <div className={s.aboutLabel}>About the Doctor</div>
            <h2 className={s.aboutName}>{doctor.name}</h2>
            <p className={s.aboutDesg}>{doctor.designation} · {doctor.qualifications}</p>
            <p className={s.aboutBio}>{doctor.bio}</p>
            <Link href="/about" className="btn-outline" style={{ marginTop: 16, display: 'inline-flex' }}>
              Read Full Profile →
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={`section ${s.servicesSection}`}>
        <div className="container">
          <h2 className="section-title">Our Specialities</h2>
          <p className="section-subtitle">Comprehensive treatment for all major anorectal conditions</p>
          <div className={s.servicesGrid}>
            {conditions.map((c) => (
              <Link key={c.slug} href={`/${c.slug}`} className={`card ${s.serviceCard}`}>
                <span className={s.serviceIcon}>{c.icon}</span>
                <h3 className={s.serviceName}>{c.title} <span className={s.serviceAlt}>({c.altTitle})</span></h3>
                <p className={s.serviceDesc}>{c.shortDesc}</p>
                <span className={s.serviceLink}>Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={`section ${s.whySection}`}>
        <div className="container">
          <h2 className="section-title">Why Patients Choose Us</h2>
          <p className="section-subtitle">Trusted specialist care without traveling to big cities</p>
          <div className={s.whyGrid}>
            {whyChooseUs.map((item) => (
              <div key={item.title} className={s.whyCard}>
                <span className={s.whyIcon}>{item.icon}</span>
                <h3 className={s.whyTitle}>{item.title}</h3>
                <p className={s.whyDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsCounter stats={stats} />
      <TestimonialCarousel testimonials={testimonials} />

      {/* CTA */}
      <section className={s.ctaBanner}>
        <div className={`container ${s.ctaInner}`}>
          <h2 className={s.ctaTitle}>Ready to Get Expert Care?</h2>
          <p className={s.ctaSub}>
            Consult {doctor.name} for Piles, Fissure, Fistula &amp; Pilonidal Sinus treatment in Palanpur.
          </p>
          <div className={s.ctaActions}>
            <Link href="/contact" className={s.ctaBtnWhite}>Book Appointment →</Link>
            <a href={`tel:${siteConfig.phone}`} className={s.ctaBtnOutline}>Call {siteConfig.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}

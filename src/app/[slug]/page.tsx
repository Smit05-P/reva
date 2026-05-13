import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { conditions, testimonials, doctor, siteConfig } from "@/lib/config";
import FAQAccordion from "@/components/FAQAccordion";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ConditionSvgBg from "@/components/ConditionSvgBg";
import HomeIcons from "@/components/HomeIcons";
import s from "./condition.module.css";

const validSlugs = conditions.map((c) => c.slug);

export function generateStaticParams() {
  return validSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = conditions.find((x) => x.slug === slug);
  if (!c) return {};
  return { title: c.seoTitle, description: c.seoDesc, openGraph: { title: c.seoTitle, description: c.seoDesc } };
}

export default async function ConditionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const condition = conditions.find((x) => x.slug === slug);
  if (!condition) notFound();

  const filtered = testimonials.filter((t) => t.condition === condition.title);
  const displayTestimonials = filtered.length >= 2 ? filtered : testimonials;

  return (
    <div className={s.pageWrapper}>
      <ConditionSvgBg slug={slug} />

      <section className="page-hero">
        <div className="container">
          <h1>{condition.heroHeadline}</h1>
          <p>Expert care by {doctor.name} · {doctor.location}</p>
        </div>
      </section>

      <section className="section">
        <div className={`container ${s.narrow}`}>
          <div className={s.defSection}>
            <div className={s.defText}>
              <h2 className={s.heading}>What is {condition.title} ({condition.altTitle})?</h2>
              <p className={s.text}>{condition.definition}</p>
            </div>
            {/* @ts-ignore */}
            {condition.image && (
              <div className={s.defImageWrapper}>
                {/* @ts-ignore */}
                <Image src={condition.image} alt={`${condition.title} Diagram`} fill className={s.defImg} sizes="(max-width: 768px) 100vw, 300px" />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className={`section ${s.altBg}`}>
        <div className={`container ${s.narrow}`}>
          <h2 className={s.heading}>Causes</h2>
          <div className={s.infoList}>
            {condition.causes.map((c) => (
              <div key={c.label} className={s.infoItem}>
                <span className={s.infoLabel}>{c.label}</span>
                <span className={s.infoDesc}>{c.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${s.narrow}`}>
          <h2 className={s.heading}>Symptoms</h2>
          <div className={s.infoList}>
            {condition.symptoms.map((sy) => (
              <div key={sy.label} className={s.infoItem}>
                <span className={s.infoLabel}>{sy.label}</span>
                <span className={s.infoDesc}>{sy.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${s.altBg}`}>
        <div className={`container ${s.narrow}`}>
          <h2 className={s.heading}>Treatment Options</h2>
          <h3 className={s.subHeading}>Conservative Management</h3>
          <ul className={s.consList}>
            {condition.conservative.map((item) => (
              <li key={item}><HomeIcons name="CheckCircle" size={14} /> {item}</li>
            ))}
          </ul>

          <h3 className={s.subHeading} style={{ marginTop: 32 }}>Surgical / Interventional Options</h3>
          <div className={s.surgicalGrid}>
            {condition.surgical.map((proc) => (
              <div key={proc.procedure} className={`card ${s.surgicalCard}`}>
                <h4 className={s.surgicalName}>{proc.procedure}</h4>
                <p className={s.surgicalDesc}>{proc.desc}</p>
                <div className={s.prosCons}>
                  <div>
                    <span className={s.proLabel}><HomeIcons name="CheckCircle" size={12} /> Advantages</span>
                    <p>{proc.advantages}</p>
                  </div>
                  <div>
                    <span className={s.conLabel}><HomeIcons name="XCircle" size={12} /> Disadvantages</span>
                    <p>{proc.disadvantages}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${s.narrow}`}>
          <h2 className={s.heading}>Post-Treatment Care</h2>
          <ul className={s.consList}>
            {condition.aftercare.map((item) => (
              <li key={item}><HomeIcons name="CheckCircle" size={14} /> {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <FAQAccordion faqs={condition.faqs} />
      <TestimonialCarousel testimonials={displayTestimonials} title={`${condition.title} Patient Reviews`} />

      <section className={s.ctaBanner}>
        <div className="container">
          <h2 className={s.ctaTitle}>Suffering from {condition.title}? Get Expert Care Today.</h2>
          <p className={s.ctaSub}>{doctor.name} · {siteConfig.phone}</p>
          <Link href="/contact" className={s.ctaBtn}>Book Appointment →</Link>
        </div>
      </section>
    </div>
  );
}

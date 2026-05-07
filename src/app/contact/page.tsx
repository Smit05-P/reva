import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import HomeIcons from "@/components/HomeIcons";
import ConditionSvgBg from "@/components/ConditionSvgBg";
import s from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact Reva Surgical Hospital in Palanpur. Call ${siteConfig.phone} or visit us for expert anorectal care.`,
};

export default function ContactPage() {
  return (
    <div style={{ position: 'relative' }}>
      <ConditionSvgBg slug="contact" />
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Book a consultation or walk in at our Palanpur clinic</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={s.cards}>
            <div className={`card ${s.contactCard}`}>
              <span className={s.icon}><HomeIcons name="Phone" size={28} /></span>
              <h3>Call Us</h3>
              <p>
                <a href={`tel:${siteConfig.phoneRaw}`} style={{ color: 'inherit', textDecoration: 'none' }}>{siteConfig.phone}</a>
                {/* @ts-ignore */}
                {siteConfig.phone2 && (
                  <>
                    <br />
                    <a href={`tel:${siteConfig.phone2Raw}`} style={{ color: 'inherit', textDecoration: 'none' }}>{siteConfig.phone2}</a>
                  </>
                )}
              </p>
            </div>
            <a href={`mailto:${siteConfig.email}`} className={`card ${s.contactCard}`}>
              <span className={s.icon}><HomeIcons name="Mail" size={28} /></span>
              <h3>Email Us</h3>
              <p>{siteConfig.email}</p>
            </a>
            <div className={`card ${s.contactCard}`}>
              <span className={s.icon}><HomeIcons name="MapPin" size={28} /></span>
              <h3>Visit Us</h3>
              <p className={s.addressText}>{siteConfig.address}</p>
            </div>
          </div>

          <div className={s.mapWrap}>
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${siteConfig.mapQuery}`}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hospital Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

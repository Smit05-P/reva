import Link from "next/link";
import Image from "next/image";
import { siteConfig, conditions } from "@/lib/config";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <div className={styles.logo}>
              <Image
                src="/images/logo.png"
                alt={siteConfig.name}
                width={200}
                height={60}
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className={styles.tagline}>
              Expert anorectal surgical care in Palanpur. Advanced laser treatment for Piles, Fissure, Fistula &amp; Pilonidal Sinus.
            </p>
          </div>

          <div>
            <h4 className={styles.heading}>Quick Links</h4>
            <ul className={styles.links}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Doctor</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/facilities">Facilities</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className={styles.heading}>Specialities</h4>
            <ul className={styles.links}>
              {conditions.map((c) => (
                <li key={c.slug}><Link href={`/${c.slug}`}>{c.title}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={styles.heading}>Contact</h4>
            <ul className={styles.links}>
              <li><a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a></li>
              <li><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
              <li className={styles.address}>{siteConfig.address}</li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

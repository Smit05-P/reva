import type { Metadata } from "next";
import { facilities } from "@/lib/config";
import FacilitiesClient from "./FacilitiesClient";
import ConditionSvgBg from "@/components/ConditionSvgBg";

export const metadata: Metadata = {
  title: "Our Facilities | Reva Surgical Hospital",
  description: "State-of-the-art facilities at Reva Surgical Hospital, Palanpur — Radiology, Anal Manometry, Biofeedback Therapy, Colonoscopy, Endoscopy, Pharmacy, Laboratory, and more.",
};

export default function FacilitiesPage() {
  return (
    <div style={{ position: 'relative' }}>
      <ConditionSvgBg slug="facilities" />
      <section className="page-hero">
        <div className="container">
          <h1>Our Facilities</h1>
          <p>State-of-the-art medical facilities for comprehensive anorectal care</p>
        </div>
      </section>

      <FacilitiesClient facilities={facilities} />
    </div>
  );
}

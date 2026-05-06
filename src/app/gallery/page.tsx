import type { Metadata } from "next";
import { galleryCategories } from "@/lib/config";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery — Our Hospital Facilities",
  description: "Explore Reva Surgical Hospital facilities in Palanpur — modern operation theatre, comfortable patient rooms, and clean infrastructure.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Our Hospital Facilities</h1>
          <p>Modern infrastructure for your comfort and safety</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <GalleryGrid categories={galleryCategories} />
        </div>
      </section>
    </>
  );
}

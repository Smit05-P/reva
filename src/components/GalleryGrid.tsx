"use client";

import { useState } from "react";
import HomeIcons from "./HomeIcons";
import s from "./Gallery.module.css";

interface GalleryImage { src: string; alt: string; }
interface GalleryCategory { title: string; images: GalleryImage[]; }

export default function GalleryGrid({ categories }: { categories: GalleryCategory[] }) {
  const [lightbox, setLightbox] = useState<{ catIdx: number; imgIdx: number } | null>(null);
  const allImages = categories.flatMap((cat) => cat.images);
  const flatIndex = lightbox
    ? categories.slice(0, lightbox.catIdx).reduce((sum, c) => sum + c.images.length, 0) + lightbox.imgIdx
    : -1;

  const navigate = (dir: number) => {
    const newFlat = (flatIndex + dir + allImages.length) % allImages.length;
    let count = 0;
    for (let ci = 0; ci < categories.length; ci++) {
      for (let ii = 0; ii < categories[ci].images.length; ii++) {
        if (count === newFlat) { setLightbox({ catIdx: ci, imgIdx: ii }); return; }
        count++;
      }
    }
  };

  const currentImage = lightbox ? categories[lightbox.catIdx].images[lightbox.imgIdx] : null;

  return (
    <>
      {categories.map((cat, ci) => (
        <div key={cat.title} className={s.category}>
          <h2 className={s.catTitle}>{cat.title}</h2>
          <div className={s.grid}>
            {cat.images.map((img, ii) => (
              <button key={img.src} className={s.item} onClick={() => setLightbox({ catIdx: ci, imgIdx: ii })} aria-label={`View ${img.alt}`}>
                <div className={s.placeholder}>
                  <HomeIcons name="Image" size={32} strokeWidth={1.5} />
                  <span className={s.placeholderText}>{img.alt}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      ))}

      {lightbox && currentImage && (
        <div className={s.overlay} onClick={() => setLightbox(null)} tabIndex={0} role="dialog" aria-label="Image lightbox"
          onKeyDown={(e) => { if (e.key === "Escape") setLightbox(null); if (e.key === "ArrowLeft") navigate(-1); if (e.key === "ArrowRight") navigate(1); }}>
          <button className={s.close} onClick={() => setLightbox(null)} aria-label="Close">
            <HomeIcons name="X" size={24} />
          </button>
          <button className={`${s.arrow} ${s.arrowLeft}`} onClick={(e) => { e.stopPropagation(); navigate(-1); }} aria-label="Previous">
            <HomeIcons name="ChevronLeft" size={32} />
          </button>
          <div className={s.lbContent} onClick={(e) => e.stopPropagation()}>
            <div className={s.lbPlaceholder}>
              <HomeIcons name="Image" size={64} strokeWidth={1} />
              <p>{currentImage.alt}</p>
            </div>
          </div>
          <button className={`${s.arrow} ${s.arrowRight}`} onClick={(e) => { e.stopPropagation(); navigate(1); }} aria-label="Next">
            <HomeIcons name="ChevronRight" size={32} />
          </button>
        </div>
      )}
    </>
  );
}

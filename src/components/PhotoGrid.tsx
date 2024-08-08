import clsx from "clsx";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function PhotoGrid({
  id,
  photos,
}: {
  id: string;
  photos: {
    title: string;
    src: string;
    alt: string;
    height: number;
    width: number;
  }[];
}) {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: `#${id}`,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      id={id}
      className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3"
    >
      {photos.map((photo, i) => (
        <a
          key={photo.title}
          href={photo.src}
          data-pswp-width={photo.width}
          data-pswp-height={photo.height}
          target="_blank"
          className={clsx("block", {
            "mt-8": i > 0,
          })}
        >
          <img
            className="h-auto max-w-full rounded-lg"
            src={photo.src}
            alt={photo.alt || photo.title}
          />
        </a>
      ))}
    </motion.div>
  );
}

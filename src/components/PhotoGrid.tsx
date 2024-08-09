import PhotoSwipeLightbox from "photoswipe/lightbox";
import { useEffect } from "react";
import { motion } from "framer-motion";
import PortfolioImage from "./PortfolioImage";

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
    products?: string[] | undefined;
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
        <PortfolioImage
          key={photo.title}
          photo={photo}
          index={i}
          onClick={() => {}}
        />
      ))}
    </motion.div>
  );
}

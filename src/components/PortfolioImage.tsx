import clsx from "clsx";
import { motion } from "framer-motion";

export default function PortfolioImage({
  photo,
  index = 0,
  onClick,
}: {
  photo: {
    title: string;
    src: string;
    alt: string;
    height: number;
    width: number;
    products?: string[];
  };
  index?: number;
  onClick: () => void;
}) {
  console.log("products", photo.products);

  return (
    <motion.a
      key={photo.title}
      href={photo.src}
      data-pswp-width={photo.width}
      data-pswp-height={photo.height}
      target="_blank"
      className={clsx("relative overflow-hidden rounded-lg block", {
        "mt-8": index > 0,
      })}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        className="h-auto max-w-full rounded-lg"
        src={photo.src}
        alt={photo.alt || photo.title}
      />
    </motion.a>
  );
}

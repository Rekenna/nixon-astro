export default function PhotoGrid({
  photos,
}: {
  photos: {
    title: string;
    src: string;
    alt: string;
  }[];
}) {
  return (
    <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 [&>img:not(:first-child)]:mt-8">
      {photos.map((photo) => (
        <img
          key={photo.title}
          className="h-auto max-w-full rounded-lg"
          src={photo.src}
          alt={photo.alt || photo.title}
        />
      ))}
    </div>
  );
}

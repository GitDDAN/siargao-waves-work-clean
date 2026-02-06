interface PhotoDividerProps {
  src: string;
  alt: string;
  className?: string;
}

const PhotoDivider = ({ src, alt, className = '' }: PhotoDividerProps) => (
  <div className={`w-full overflow-hidden ${className}`}>
    <img
      src={src}
      alt={alt}
      className="w-full h-[150px] sm:h-[220px] md:h-[300px] object-cover"
      loading="lazy"
    />
  </div>
);

export default PhotoDivider;

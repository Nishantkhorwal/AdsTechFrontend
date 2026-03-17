import { useEffect, useRef, useState } from "react";

const LazyImage = ({ src, alt, className, children }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative w-full h-full">
      {isVisible && (
        <img
          src={src}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover ${className}`}
        />
      )}

      {/* Overlay Content */}
      {children}
    </div>
  );
};

export default LazyImage;

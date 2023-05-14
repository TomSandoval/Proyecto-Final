import "../Publicidad/Publicidad.css";
import { useState, useEffect } from "react";

const background_image = [
  "https://http2.mlstatic.com/D_NQ_671365-MLA69288732514_052023-OO.webp",
  "https://http2.mlstatic.com/D_NQ_900715-MLA69337684526_052023-OO.webp",
  "https://http2.mlstatic.com/D_NQ_776401-MLA54983332943_052023-OO.webp",
  "https://http2.mlstatic.com/D_NQ_875375-MLA69362854298_052023-OO.webp",
];

export default function Publicidad() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex(
      currentIndex === background_image.length - 1 ? 0 : currentIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 4000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div
      className="carousel"
      // style={{ backgroundImage: `url(${background_image})` }}
    >
      {background_image.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="carousel-image"
          className={`carousel-image ${index === currentIndex ? "active" : ""}`}
        />
      ))}
    </div>
  );
}

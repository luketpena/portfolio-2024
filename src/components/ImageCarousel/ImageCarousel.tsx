import { useState } from 'react';
import Icon from '../Icon/Icon';

interface ImageCarouselProps {
  images?: string[];
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images = [],
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNext() {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1,
    );
  }

  function handlePrevious() {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1,
    );
  }

  if (!images || images.length === 0) {
    return <></>;
  }

  return (
    <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl">
      {/* Image display */}
      <div
        className="w-full h-full bg-center bg-cover"
        style={{ backgroundImage: `url("${images[currentIndex]}")` }}
      />
      {/* <img key={currentIndex} src={images[currentIndex]} /> */}

      {/* Navigation controls */}
      {images.length > 1 && (
        <div className="absolute w-full h-full left-0 top-0 flex justify-between items-center">
          <button
            className="h-full  hover:bg-white/15 flex flex-col justify-center px-8"
            onClick={handlePrevious}
          >
            <Icon name="FaChevronLeft" color="#ffffff" />
          </button>

          <button
            className="h-full hover:bg-white/15 flex flex-col justify-center px-8"
            onClick={handleNext}
          >
            <Icon name="FaChevronRight" color="#ffffff" />
          </button>
        </div>
      )}
    </div>
  );
};

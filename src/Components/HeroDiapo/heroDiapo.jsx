import { useState, useRef, useEffect } from 'react'
import "./heroDiapo.css"

// Images
import heroImg1 from '../../Assets/Images/heroImage1.jpg'
import heroImg2 from '../../Assets/Images/pexels-ropes.webp'
import heroImg3 from '../../Assets/Images/heroImage3.jpg'
import heroImg4 from '../../Assets/Images/heroImage4.jpeg'
import heroImg5 from '../../Assets/Images/heroImage5.webp'
import heroImg6 from '../../Assets/Images/heroImage6.jpg'
import heroImg7 from '../../Assets/Images/nutrition-coaching-min.jpg'
import heroImg8 from '../../Assets/Images/workout-5914643__340.jpg'

const delay = 4000;

function HeroDiapo() {
  const [index, setIndex] = useState(0);

  const myPictures = [heroImg1, heroImg2, heroImg3, heroImg4, heroImg5, heroImg6, heroImg7, heroImg8]
  const length = myPictures.length

  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {myPictures.map((_, index) => (
          <div className="slide" key={index}>
            <img src={myPictures[index]} alt="fitness trainer Geneva" />
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {myPictures.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default HeroDiapo
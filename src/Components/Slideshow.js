import React from 'react';
import { Slide } from 'react-slideshow-image';
import './Slideshow.css'
import img1 from '../Media/Almond Brittle.jpg'
import img2 from '../Media/Bueno.jpg'
import img3 from '../Media/Dairy milk blaack forest.jpg'
import img4 from '../Media/Dairy milk fruit n nut.jpg'
import img5 from '../Media/Dairy milk hazelnut.jpg'
import img6 from '../Media/Dairy milk roasted almond.jpg'
import img7 from '../Media/Hokah 2.jpg'
import img8 from '../Media/hookah 1.jpg'
import img9 from '../Media/Kitkat original.jpg'
import img11 from '../Media/Lindt apricot.jpg'
import img12 from '../Media/Lindt caramel.jpg'
import img13 from '../Media/Lindt cherry.jpg'
import img10 from '../Media/Lindt chilli.jpg'
import img14 from '../Media/Lindt cocoa.jpg'
import img15 from '../Media/Lindt coconut.jpg'
import img16 from '../Media/Lindt cremoso.jpg'
import img17 from '../Media/Lindt Limon.jpg'
import img18 from '../Media/Lindt mint.jpg'
import img19 from '../Media/Lindt orange.jpg'
import img20 from '../Media/Lindt strawberry.jpg'
import img21 from '../Media/Nutella B ready.jpg'
import img22 from '../Media/OCB 1.jpg'
import img23 from '../Media/OCB 2.jpg'
import img24 from '../Media/Skull hookah.jpg'
import img25 from '../Media/Vape 1.jpg'
import img26 from '../Media/Vape 2.jpg'


const slideImages = [
    { src: img1 }, { src: img2 }, { src: img3 }, { src: img4 }, { src: img5 }, { src: img6 }, { src: img7 }, { src: img8 },
    { src: img9 }, { src: img10 }, { src: img13 }, { src: img11 }, { src: img12 }, { src: img14 }, { src: img15 },
    { src: img16 }, { src: img17 }, { src: img18 }, { src: img19 }, { src: img20 }, { src: img21 }, { src: img22 },
    { src: img23 }, { src: img24 }, { src: img25 }, { src: img26 }
];

const delay = 2500;

function Slideshow() {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1
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
                {slideImages.map((e, index) => (
                    <div
                        className="slide"
                        key={index}
                    >
                        <img className="SlideImage" src={e.src}></img>
                    </div>
                ))}
            </div>

            <div className="slideshowDots">
                {slideImages.map((_, idx) => (
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
export default Slideshow
import React from 'react';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

type SlideshowProps = {
    children: React.ReactNode,
    images: string[],
    height: string,
    duration?: number,
    transitionDuration?: number,
    canSwipe?: boolean,
    arrows?: boolean
}

const Slideshow = ({canSwipe = false, arrows = false, ...props}: SlideshowProps) => {
    return (
        <div className="relative">
            <div className="absolute h-full w-full z-50">
                {props.children}
            </div>
            <Slide duration={props.duration} transitionDuration={props.transitionDuration} canSwipe={canSwipe}
                   arrows={arrows} pauseOnHover={false} autoplay={false}>
                {props.images.map((slideImage, index) => (
                    <div key={index}>
                        <div className="flex justify-center items-center bg-cover bg-center"
                             style={{height: props.height, 'backgroundImage': `url(${slideImage})`}}>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default Slideshow;
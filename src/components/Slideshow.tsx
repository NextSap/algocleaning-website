import React from 'react';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
}

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
                   arrows={arrows} pauseOnHover={false}>
                {props.images.map((slideImage, index) => (
                    <div key={index}>
                        <div className="flex justify-center items-center bg-cover"
                             style={{height: props.height, 'backgroundImage': `url(${slideImage})`}}>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default Slideshow;
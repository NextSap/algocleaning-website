import React from 'react';

type ImageCardProps = {
    children?: string;
    image: string;
    height: string;
    width: string;
}

const ImageCard = (props: ImageCardProps) => {
    return (
        <div style={{height: props.height, width: props.width}} className="flex justify-center items-center border border-black">
            <h1 className="text-[40px] font-semibold text-white">{props.children}</h1>
        </div>
    );
};

export default ImageCard;
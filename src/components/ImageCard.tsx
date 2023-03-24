import React from 'react';

type ImageCardProps = {
    children?: string;
    image: string;
    height: string;
    width: string;
    borderRadius?: string;
    className?: string;
}

const ImageCard = (props: ImageCardProps) => {
    return (
        <div style={{height: props.height, width: props.width, backgroundImage: "url('" + props.image + "')",
            borderRadius: props.borderRadius}}
             className={"flex justify-center items-center bg-center bg-cover "+props.className}>
            <h2 className="text-[33px] font-bold text-white tracking-wide">{props.children}</h2>
        </div>
    );
};

export default ImageCard;
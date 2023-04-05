import React from 'react';

type DescriptionCard = {
    children: string;
    description: string;
    image: string;
    imagePosition: "left" | "right";
    height?: string;
}

const DescriptionCard = (props: DescriptionCard) => {
    return (
        <div className={"flex flex-col w-full items-center justify-between "+(isImagePositionLeft(props.imagePosition) ? "lg:flex-row" : "lg:flex-row-reverse")}>
            <div className={`h-[350px] w-full rounded-[15px] bg-center bg-cover mb-5 lg:w-[45%] lg:h-[500px]`} style={{backgroundImage: "url('" + props.image + "')"}} />
            <div className="flex flex-col justify-around h-auto w-full lg:w-[45%] lg:h-[500px]">
                <h2 className="text-[28px] font-semibold text-dark mt-3 mb-5 lg:mt-0 lg:mb-0">{props.children}</h2>
                <p className="text-[18px] text-grey whitespace-pre-wrap">
                    {props.description}
                </p>
            </div>
        </div>
    );
};

function isImagePositionLeft(imagePosition: "left" | "right"): boolean {
    return imagePosition === "left";
}
export default DescriptionCard;
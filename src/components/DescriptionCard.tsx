import React from 'react';

type DescriptionCard = {
    children: string;
    description: string;
    image: string;
    imagePosition: "left" | "right";

}

const DescriptionCard = (props: DescriptionCard) => {
    return (
        <div className={"flex flex-col w-full items-center justify-between "+(isImagePositionLeft(props.imagePosition) ? "md:flex-row" : "md:flex-row-reverse")}>
            <div className="h-[300px] w-full rounded-[15px] bg-center bg-cover md:w-[40%]" style={{backgroundImage: "url('" + props.image + "')"}} />
            <div className="flex flex-col justify-around h-[200px] w-full md:w-[40%] md:h-[300px]">
                <h2 className="text-[28px] font-semibold text-dark mt-5 md:mt-0">{props.children}</h2>
                <p className="text-[18px] text-grey">{props.description}</p>
            </div>
        </div>
    );
};

function isImagePositionLeft(imagePosition: "left" | "right"): boolean {
    return imagePosition === "left";
}
export default DescriptionCard;
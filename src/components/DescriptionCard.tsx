import React from 'react';

type DescriptionCard = {
    children: string;
    description: string;
    image?: string;
    imagePosition: "left" | "right";

}

const DescriptionCard = (props: DescriptionCard) => {
    return (
        <div className={"flex flex-col w-full justify-center md:space-x-28 md:"+(isImagePositionLeft(props.imagePosition) ? "flex-row" : "flex-row-reverse md:space-x-reverse")}>
            <div className="h-[300px] w-[500px] border border-black rounded-[15px]" />
            <div className="flex flex-col justify-around h-[300px] w-[500px]">
                <h2 className="text-[28px] font-semibold text-dark">{props.children}</h2>
                <p className="text-[18px] text-darkGrey">{props.description}</p>
            </div>
        </div>
    );
};

function isImagePositionLeft(imagePosition: "left" | "right"): boolean {
    return imagePosition === "left";
}
export default DescriptionCard;
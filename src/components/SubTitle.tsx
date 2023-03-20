import React from 'react';
import {colors} from "@/utils/ColorsUtils";

type SubTitleProps = {
    children: string;
    color?: string;
    underline?: string | undefined;

}

const SubTitle = ({color = colors.dark, ...props}: SubTitleProps) => {
    return (
        <div className="flex flex-col items-center">
            <h2 style={{color: color}} className="text-[33px]">{props.children}</h2>
            <div style={{borderColor: color, width: props.underline ? props.underline : ""}} className={props.underline ? "border" : "hidden"}/>
        </div>
    );
};

export default SubTitle;
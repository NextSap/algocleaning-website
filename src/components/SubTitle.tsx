import React from 'react';
import {colors} from "@/utils/ColorsUtils";

type SubTitleProps = {
    subtitle: string;
    width: string;
    color?: string;
}

const SubTitle = ({color = colors.dark, ...props}: SubTitleProps) => {
    return (
        <div className="flex flex-col items-center">
            <h2 style={{color: color}} className="text-[33px]">{props.subtitle}</h2>
            <hr style={{borderColor: color, width: props.width}} className="border"/>
        </div>
    );
};

export default SubTitle;
import React, {ComponentPropsWithoutRef} from 'react';
import {colors} from "@/utils/ColorsUtils";

type SubTitleProps = {
    children: string;
    color?: string;
    underline?: string | undefined;
} & ComponentPropsWithoutRef<"div">

const SubTitle = ({color = colors.dark, children, underline, ...props}: SubTitleProps) => {
    return (
        <div {...props} className="flex flex-col items-center mt-10 mb-6">
            <h2 style={{color: color}} className="text-[33px] text-center">{children}</h2>
            <div style={{borderColor: color, width: underline ? underline : ""}} className={underline ? "border" : "hidden"}/>
        </div>
    );
};

export default SubTitle;
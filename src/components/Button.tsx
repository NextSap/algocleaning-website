import React, {ComponentPropsWithoutRef, useState} from 'react';
import {colors} from "@/utils/ColorsUtils";

type ButtonProps = {
    backgroundColor: string;
    fontColor: string;
    hoverBackgroundColor?: string;
    hoverFontColor?: string;
    borderColor?: string;
    borderRadius?: string;
    fontSize?: string;
    padding?: string;
    margin?: string;
    withArrow?: boolean;
} & ComponentPropsWithoutRef<"button">;

const ButtonComponent = ({
                    backgroundColor,
                    fontColor,
                    borderColor = colors.white,
                    borderRadius = "0px",
                    fontSize = "16px",
                    hoverFontColor = colors.white,
                    hoverBackgroundColor = colors.white,
                    padding = "10px",
                    margin,
                    withArrow = false,
                    ...props
                }: ButtonProps) => {

    const [hover, setHover] = useState(false);

    return (
            <button
                {...props}
                style={{
                    color: hover ? hoverFontColor : fontColor,
                    borderColor: borderColor,
                    borderRadius: borderRadius,
                    fontSize: fontSize,
                    padding: padding,
                    margin: margin,
                    backgroundColor: hover ? hoverBackgroundColor : backgroundColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: withArrow ? "space-around" : "center",
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}>
                {withArrow ? <img src="/images/WhiteArrow.png" alt="Flèche" style={{height: fontSize}}/> : ""}
                {props.children}
            </button>

    );
};

export default ButtonComponent;
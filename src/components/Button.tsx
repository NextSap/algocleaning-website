import React from 'react';
import {styled} from '@mui/material/styles';
import MUIButton, {ButtonProps as MUIButtonProps} from "@mui/material/Button";

type ButtonProps = {
    coloredFull?: boolean;
    backgroundColor: string;
    fontColor: string;
    hoverBackgroundColor?: string;
    hoverFontColor?: string;
    borderColor?: string;
    borderRadius?: string;
    fontSize?: string;
} & MUIButtonProps;

const Button = ({coloredFull = true,
                    backgroundColor,
                    fontColor,
                    borderColor,
                    borderRadius,
                    fontSize,
                    hoverFontColor,
                    hoverBackgroundColor,
                    ...props
                }: ButtonProps) => {
    const CustomButton = styled(MUIButton)<MUIButtonProps>(() => ({
        backgroundColor: backgroundColor,
        color: fontColor,
        borderColor: borderColor,
        borderRadius: borderRadius,
        fontSize: fontSize,
        textTransform: "none",
        '&:hover': {
            backgroundColor: hoverBackgroundColor,
            color: hoverFontColor,
        }
    }));

    const color = backgroundColor;

    return (
        <CustomButton
            {...props}
            className={"bg-[" + color + "]"}
            variant={coloredFull ? "contained" : "text"}>{props.children}</CustomButton>
    );
};

export default Button;
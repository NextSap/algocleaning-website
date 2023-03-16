import React from 'react';
import {styled} from '@mui/material/styles';
import MUIButton, {ButtonProps as MUIButtonProps} from "@mui/material/Button";
import {colors} from "@/utils/ColorsUtils";

type ButtonProps = {
    coloredFull: boolean;
    backgroundColor: string;
    fontColor: string;
    hoverBackgroundColor?: string;
    hoverFontColor?: string;
    borderColor?: string;
    borderRadius?: string;
    fontSize?: string;
    textTransform?: boolean;
} & MUIButtonProps;

const Button = ({
                    coloredFull = false,
                    backgroundColor = colors.main,
                    fontColor = colors.dark,
                    hoverBackgroundColor = colors.white,
                    ...props
                }: ButtonProps) => {
    const CustomButton = styled(MUIButton)<MUIButtonProps>(() => ({
        color: fontColor,
        borderColor: props.borderColor,
        borderRadius: props.borderRadius,
        fontSize: props.fontSize,
        textTransform: props.textTransform ? "uppercase" : "none",
        '&:hover': {
            backgroundColor: hoverBackgroundColor,
            color: props.hoverFontColor,
        }
    }));

    return (
        <CustomButton style={{backgroundColor: backgroundColor}}
                      variant={coloredFull ? "contained" : "text"}>{props.children}</CustomButton>
    );
};

export default Button;
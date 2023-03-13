import React from 'react';
import {styled} from '@mui/material/styles';
import MUIButton, {ButtonProps as MUIButtonProps} from "@mui/material/Button";
import {colors} from "@/utils/ColorsUtils";

type ButtonProps = {
    coloredFull: boolean;
    backgroundColor: string;
    fontColor: string;
    hoverBackgroundColor: string;
    hoverFontColor?: string;
    borderColor?: string;
} & React.ComponentPropsWithoutRef<typeof MUIButton>;

const Button = ({
                    coloredFull = false,
                    backgroundColor = colors.main,
                    fontColor = colors.dark,
                    hoverBackgroundColor = colors.white,
                    ...props
                }: ButtonProps) => {
    const CustomButton = styled(MUIButton)<MUIButtonProps>(() => ({
        backgroundColor: backgroundColor,
        color: fontColor,
        borderColor: props.borderColor,
        '&:hover': {
            backgroundColor: hoverBackgroundColor,
            color: props.hoverFontColor,
        }
    }));

    return (
        <CustomButton variant={coloredFull ? "contained" : "text"}>{props.children}</CustomButton>
    );
};

export default Button;
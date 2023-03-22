import React, {useState} from 'react';
import {createTheme, styled, ThemeProvider} from '@mui/material/styles';
import {ButtonProps as MUIButtonProps} from "@mui/material/Button";
import Button from "@mui/material/Button";
import {colors} from "@/utils/ColorsUtils";

import {Montserrat} from "next/dist/compiled/@next/font/dist/google";

const theme = createTheme({
    typography: {
        fontFamily: 'Montserrat, sans-serif',
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(${Montserrat});
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
        },
    },
});

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

const ButtonComponent = ({coloredFull = true,
                    backgroundColor,
                    fontColor,
                    borderColor,
                    borderRadius,
                    fontSize,
                    hoverFontColor,
                    hoverBackgroundColor = colors.white,
                    ...props
                }: ButtonProps) => {

    const [hover, setHover] = useState(false);

    const CustomButton = styled(Button)(() => ({
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

    return (
        <ThemeProvider theme={theme}>
            <CustomButton
                {...props}
                style={{
                    backgroundColor: hover ? hoverBackgroundColor : backgroundColor,
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                variant={coloredFull ? "contained" : "text"}>
                {props.children}
            </CustomButton>
        </ThemeProvider>

    );
};

export default ButtonComponent;
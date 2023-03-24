import React from 'react';
import Button from "@/components/Button";
import {colors} from "@/utils/ColorsUtils";
import Link from "next/link";

const ContactUsButton = () => {
    return (
        <Button className="w-[200px] mt-[50px] tracking-wide"
                backgroundColor={colors.main}
                fontColor={colors.white}
                hoverBackgroundColor={colors.grey}
                fontSize={"18px"}>
            <Link href={"#contact"} scroll={false}>
                Nous contacter
            </Link>
        </Button>
    );
};

export default ContactUsButton;
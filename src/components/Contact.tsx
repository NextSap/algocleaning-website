import React from 'react';
import SubTitle from "@/components/SubTitle";
import Data from "../../public/Data.json";
import {ContactType} from "@/utils/type";
import ContactProfile from "@/components/ContactProfile";
import Form from "@/components/Form";

type ContactProps = {
    domain?: "Façades" | "Terrasses" | "Toitures" | undefined,
};

const Contact = (props: ContactProps) => {
    return (
        <div className="flex flex-col items-center w-full">
            <SubTitle id="contact" underline="50px">Contact</SubTitle>
            <div className="flex flex-col justify-around w-full space-x-2 gap-5 md:w-[60%] md:flex-row md:gap-0">
                {Data.contact.map((contact: ContactType, index: number) => {
                    return (
                        <ContactProfile key={index} phone={contact.phone} image={contact.image}>
                            {contact.name}
                        </ContactProfile>
                    );
                })}
            </div>
            <div className="w-[80%] mt-10 mb-20 md:w-[60%]">
                <Form size={"small"} domain={props.domain}/>
            </div>
        </div>
    );
};

export default Contact;
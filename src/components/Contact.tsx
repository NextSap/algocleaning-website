import React from 'react';
import SubTitle from "@/components/SubTitle";
import Form from "@/components/Form";

type ContactProps = {
    domain?: "Façades" | "Terrasses" | "Toitures" | undefined,
};

const Contact = (props: ContactProps) => {
    return (
        <div className="flex flex-col items-center w-full">
            <SubTitle id="contact" underline="50px">Contact</SubTitle>
            <div className="flex flex-col items-center w-full space-x-2 gap-3 md:w-[60%] text-center">
                <h3>Votre façade a besoin d'une remise en état ?</h3>
                <h3>0460 97 97 85 - <a className="underline" href="mailto:algofacades@gmail.com">algofacades@gmail.com</a></h3>
            </div>
            <div className="w-[80%] mt-10 mb-20 md:w-[60%]">
                <Form size={"small"} domain={props.domain}/>
            </div>
        </div>
    );
};

export default Contact;
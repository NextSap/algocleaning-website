import React from 'react';
import Header from "@/components/Header";
import ImageCard from "@/components/ImageCard";
import DescriptionCard from "@/components/DescriptionCard";
import SubTitle from "@/components/SubTitle";
import FAQ from "../../../public/FAQ.json";
import Collapse from "@/components/Collapse";
import ContactProfile from "@/components/ContactProfile";
import Form from "@/components/Form";
import {useRouter} from "next/router";
import Button from "@/components/Button";
import {colors} from "@/utils/ColorsUtils";
import Link from "next/link";

const image = "https://www.quotatis.fr/conseils-travaux/wp-content/uploads/2017/07/nettoyage-fa%C3%A7ade-1.jpg"

const data = [
    {
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque aut dicta harum omnis quis vero, vitae. Dolorem facilis id impedit, incidunt nemo rem repudiandae!",
        image: image,
    },
    {
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque aut dicta harum omnis quis vero, vitae. Dolorem facilis id impedit, incidunt nemo rem repudiandae!",
        image: image,
    },
    {
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque aut dicta harum omnis quis vero, vitae. Dolorem facilis id impedit, incidunt nemo rem repudiandae!",
        image: image,
    },
]

const Terrasses = () => {
    return (
        <div className="flex flex-col items-center w-full">
            <Header contactId={"contact"}/>
            <ImageCard borderRadius={"10px"} image={image} height={"200px"} width={"80%"}>Terrasses</ImageCard>
            <ContactButton/>
            <div className="flex flex-col gap-10 w-[80%] mt-20">
                {data.map((item, index) => (
                    <DescriptionCard imagePosition={index % 2 === 0 ? "left" : "right"} key={index}
                                     description={item.description} image={item.image}>{item.title}</DescriptionCard>
                ))}
            </div>
            <ContactButton/>
            <div className="flex flex-col items-center w-full mt-16">
                <SubTitle underline="150px">Les questions les plus posées</SubTitle>
                {FAQ.map((faq) => {
                    return (
                        <Collapse content={faq.answer}>{faq.question}</Collapse>
                    );
                })}
            </div>
            <div className="flex flex-col items-center w-full">
                <SubTitle id="contact" underline="50px">Contact</SubTitle>
                <div className="flex justify-around w-full space-x-2 md:w-[60%]">
                    <ContactProfile phone="0472 72 72 72" image="https://nextsap.s-ul.eu/StcahbER">Di Ilio Joachim</ContactProfile>
                    <ContactProfile phone="0472 72 72 72" image="https://nextsap.s-ul.eu/StcahbER">Di Ilio Joachim</ContactProfile>
                </div>
                <div className="w-[80%] mt-10 mb-20 md:w-[60%]">
                    <Form size={"small"} domain={"Terrasses"}/>
                </div>
            </div>
        </div>
    );
};

const ContactButton = () => {
    return (
        <Button sx={{width: "200px", marginTop: "50px", letterSpacing: "1px"}}
                backgroundColor={colors.main}
                fontColor={colors.white}
                hoverBackgroundColor={colors.grey}
                fontSize={"18px"}>
            <Link href={"#contact"} scroll={false}>
                Nous contacter
            </Link>
        </Button>
    );
}

export default Terrasses;
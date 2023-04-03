import React from 'react';
import ImageCard from "@/components/ImageCard";
import Header from "@/components/Header";
import DescriptionCard from "@/components/DescriptionCard";
import SubTitle from "@/components/SubTitle";
import Data from "../../../public/Data.json";
import Collapse from "@/components/Collapse";
import {DataType, FAQType} from "@/utils/type";
import Contact from "@/components/Contact";
import ContactUsButton from "@/components/ContactUsButton";
import Faq from "@/components/Faq";

const Façades = () => {
    return (
        <div className="flex flex-col items-center w-full">
            <Header/>
            <ImageCard className="mt-5" borderRadius={"10px"} image="/images/photo-factice.jpeg" height={"200px"} width={"80%"}>Façades</ImageCard>
            <ContactUsButton/>
            <div className="flex flex-col gap-10 w-[80%] mt-20">
                {Data.data.façades.map((item: DataType, index: number) => (
                    <DescriptionCard imagePosition={index % 2 === 0 ? "left" : "right"} key={index}
                                     description={item.description} image={item.image}>{item.title}</DescriptionCard>
                ))}
            </div>
            <ContactUsButton/>
            <Faq/>
            <Contact domain={"Façades"}/>
        </div>
    );
};

export default Façades;
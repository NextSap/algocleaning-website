import React from 'react';
import Header from "@/components/Header";
import ImageCard from "@/components/ImageCard";
import DescriptionCard from "@/components/DescriptionCard";
import SubTitle from "@/components/SubTitle";
import Data from "../../../public/Data.json";
import Collapse from "@/components/Collapse";
import {DataType, FAQType} from "@/utils/type";
import Contact from "@/components/Contact";
import ContactUsButton from "@/components/ContactUsButton";
import Faq from "@/components/Faq";

const Terrasses = () => {
    return (
        <div className="flex flex-col items-center w-full">
            <Header/>
            <ImageCard className="mt-5" borderRadius={"10px"} image="/images/photo-factice.jpeg" height={"200px"} width={"80%"}>Terrasses</ImageCard>
            <ContactUsButton/>
            <div className="flex flex-col gap-10 w-[80%] mt-20">
                {Data.data.terrasses.map((item: DataType, index: number) => (
                    <DescriptionCard key={index}
                                     imagePosition={index % 2 === 0 ? "left" : "right"}
                                     description={item.description}
                                     image={item.image}>
                        {item.title}
                    </DescriptionCard>
                ))}
            </div>
            <ContactUsButton/>
            <Faq/>
            <Contact domain={"Terrasses"}/>
        </div>
    );
};

export default Terrasses;
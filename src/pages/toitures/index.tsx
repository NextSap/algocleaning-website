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
import Head from "next/head";
import Footer from "@/components/Footer";

const Toitures = () => {
    return (
        <div className="flex flex-col items-center w-full">
            <Head>
                <title>Algo Façade - Toitures</title>
            </Head>
            <Header/>
            <ImageCard className="mt-5" borderRadius={"10px"} image={"/images/toitures-2.webp"} height={"300px"} width={"80%"}>Toitures</ImageCard>
            <ContactUsButton/>
            <div className="flex flex-col gap-10 w-[80%] mt-20">
                {Data.data.toitures.map((item:DataType, index:number) => (
                    <DescriptionCard imagePosition={index % 2 === 0 ? "left" : "right"} key={index}
                                     description={item.description} image={item.image}>{item.title}</DescriptionCard>
                ))}
            </div>
            <ContactUsButton/>
            <Faq/>
            <Contact domain={"Toitures"}/>
            <Footer/>
        </div>
    );
};

export default Toitures;
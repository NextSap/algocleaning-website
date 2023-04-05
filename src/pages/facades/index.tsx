import React from 'react';
import ImageCard from "@/components/ImageCard";
import Header from "@/components/Header";
import DescriptionCard from "@/components/DescriptionCard";
import Data from "../../../public/Data.json";
import {DataType} from "@/utils/type";
import Contact from "@/components/Contact";
import ContactUsButton from "@/components/ContactUsButton";
import Faq from "@/components/Faq";
import VideoDescriptionCard from "@/components/VideoDescriptionCard";
import Head from "next/head";
import Footer from "@/components/Footer";

const Façades = () => {
    return (
        <div className="flex flex-col items-center w-full">
            <Head>
                <title>Algo Façade - Façades</title>
            </Head>
            <Header/>
            <ImageCard className="mt-5" borderRadius={"10px"} image="/images/façades.JPEG" height={"300px"} width={"80%"}>Façades</ImageCard>
            <ContactUsButton/>
            <div className="flex flex-col gap-10 w-[80%] mt-20">
                {Data.data.façades.map((item: DataType, index: number) => (
                    <DescriptionCard imagePosition={index % 2 === 0 ? "left" : "right"} key={index}
                                     description={item.description} image={item.image}>{item.title}</DescriptionCard>
                ))}
                <VideoDescriptionCard video={"/images/Lotusan.mp4"}>StolColor Lotusan</VideoDescriptionCard>
                <VideoDescriptionCard video={"/images/Dryonic.mp4"}>StolColor Dryonic</VideoDescriptionCard>
            </div>
            <ContactUsButton/>
            <Faq/>
            <Contact domain={"Façades"}/>
            <Footer/>
        </div>
    );
};

export default Façades;
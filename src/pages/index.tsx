import React from 'react';
import Button from "@/components/Button";
import {colors} from "@/utils/ColorsUtils";
import Form from "@/components/Form";
import Header from "@/components/Header";
import Slideshow from "@/components/Slideshow";
import {useRouter} from "next/navigation";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context";
import SubTitle from "@/components/SubTitle";
import ImageCard from "@/components/ImageCard";
import ContactProfile from "@/components/ContactProfile";
import FAQ from "../../public/FAQ.json";
import Collapse from "@/components/Collapse";
import Link from "next/link";

const images: string[] = [
    "https://nextsap.s-ul.eu/StcahbER",
    "https://nextsap.s-ul.eu/StcahbER",
    "https://nextsap.s-ul.eu/StcahbER",
];


const Home = () => {
    const router: AppRouterInstance = useRouter();
    return (
        <div>
            <Header contactId={"contact"}/>
            <Slideshow images={images} height={"600px"}>
                <div className="flex flex-col justify-center items-center h-full w-full space-y-10">
                    <h1 className="text-white text-4xl font-medium tracking-wide text-center">Entretien professionnel de
                        façades</h1>
                    <Button backgroundColor={colors.white}
                            fontColor={colors.dark}>
                        <Link href={"#services"} scroll={false}>
                            Nos Services
                        </Link>
                    </Button>
                </div>
            </Slideshow>
            <div className="flex flex-col items-center">
                <SubTitle id="services" underline={"40px"}>Services</SubTitle>
                <ImageCard borderRadius="10px"
                           image={"https://www.quotatis.fr/conseils-travaux/wp-content/uploads/2017/07/nettoyage-fa%C3%A7ade-1.jpg"}
                           height="300px" width="80%">
                    Façades
                </ImageCard>
                <div className="flex flex-col justify-around items-center w-[80%] mt-8 mb-16 md:flex-row">
                    <p className="w-full text-xl text-dark mb-5 md:w-[50%] md:mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur culpa ducimus harum
                        impedit, odit officia, placeat porro quae quasi reprehenderit sapiente sint sunt unde.
                    </p>
                    <Button sx={{height: "40px", borderRadius: "30px", padding: "20px"}}
                            fontSize="17px"
                            backgroundColor={colors.main}
                            fontColor={colors.white}
                            hoverBackgroundColor={colors.lightGrey}
                            onClick={() => router.push("/facades")}>
                        En savoir plus sur les façades
                    </Button>
                </div>
                <div className="flex flex-col items-center w-full">
                    <SubTitle>AlgoCleaning c'est aussi...</SubTitle>
                    <div
                        className="flex flex-col items-center justify-between w-[80%] space-y-10 md:flex-row md:space-y-0">
                        <div className="flex flex-col items-center w-full md:w-[45%]">
                            <ImageCard borderRadius="10px"
                                       image={"https://www.quotatis.fr/conseils-travaux/wp-content/uploads/2017/07/nettoyage-fa%C3%A7ade-1.jpg"}
                                       height="250px" width="100%">
                                Toitures
                            </ImageCard>
                            <Button
                                backgroundColor={colors.grey}
                                fontColor={colors.white}
                                hoverBackgroundColor={colors.lightGrey}
                                sx={{width: "225px", height: "30px", marginTop: "15px"}}
                                onClick={() => router.push("/toitures")}>
                                Nettoyage de toitures
                            </Button>
                        </div>
                        <div className="flex flex-col items-center w-full md:w-[45%]">
                            <ImageCard borderRadius="10px"
                                       image={"https://www.quotatis.fr/conseils-travaux/wp-content/uploads/2017/07/nettoyage-fa%C3%A7ade-1.jpg"}
                                       height="250px" width="100%">
                                Terrasses
                            </ImageCard>
                            <Button
                                backgroundColor={colors.grey}
                                fontColor={colors.white}
                                hoverBackgroundColor={colors.lightGrey}
                                sx={{width: "225px", height: "30px", marginTop: "15px"}}
                                onClick={() => router.push("/terrasses")}>
                                Nettoyage de terrasses
                            </Button>
                        </div>
                    </div>
                </div>
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
                        <ContactProfile phone="0472 72 72 72" image="https://nextsap.s-ul.eu/StcahbER">Di Ilio
                            Joachim</ContactProfile>
                        <ContactProfile phone="0472 72 72 72" image="https://nextsap.s-ul.eu/StcahbER">Di Ilio
                            Joachim</ContactProfile>
                    </div>
                    <div className="w-[80%] mt-10 mb-20 md:w-[60%]">
                        <Form size={"small"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
import React from 'react';
import Button from "@/components/Button";
import {colors} from "@/utils/ColorsUtils";
import Header from "@/components/Header";
import Slideshow from "@/components/Slideshow";
import {useRouter} from "next/navigation";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context";
import SubTitle from "@/components/SubTitle";
import ImageCard from "@/components/ImageCard";
import Link from "next/link";
import DescriptionCard from "@/components/DescriptionCard";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Data from "../../public/Data.json";
import Footer from "@/components/Footer";

const Home = () => {
    const router: AppRouterInstance = useRouter();
    return (
        <div>
            <Header/>
            <Slideshow images={Data.slideshow} height={"600px"}>
                <div className="flex flex-col justify-center items-center h-full w-full space-y-10">
                    <h1 className="text-white text-[40px] font-bold tracking-wide text-center w-full md:w-[60%]">
                        {Data.title}
                    </h1>
                    <Button backgroundColor={colors.white}
                            fontColor={colors.dark}
                            hoverFontColor={colors.darkGrey}>
                        <Link href={"#services"} scroll={false}>
                            Nos Services
                        </Link>
                    </Button>
                </div>
            </Slideshow>
            <div className="flex flex-col items-center mt-14">
                <div className="w-[80%]">
                    <DescriptionCard description={Data.whyalgofacade}
                                     image={"/images/WhyAlgoFacade.jpg"}
                                     imagePosition="left">
                        Pourquoi Algo Façade ?
                    </DescriptionCard>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <SubTitle id="services" underline={"40px"}>Services</SubTitle>
                <ImageCard borderRadius="10px"
                           image={"/images/façades.JPEG"}
                           height="300px" width="80%">
                    Façades
                </ImageCard>
                <div className="flex flex-col justify-around w-[80%] mt-8 mb-16 gap-5 lg:flex-row lg:items-center">
                    <div className="flex flex-col justify-around lg:w-[45%]">
                        <h2 className="text-[28px] font-semibold text-dark mt-5 mb-3 md:mt-0">Algo Façade à votre service</h2>
                        <p className="w-full text-xl text-dark mb-5 md:mb-0">
                            Suite à la demande croissante de ses clients, MS Isolation propose dorénavant les services complémentaires de nettoyage de façade et de démoussage de toiture. Algo Façade est une nouvelle branche de notre entreprise présente depuis plus de 25 ans dans le Brabant wallon, le Hainaut et la Wallonie.
                        </p>
                    </div>
                        <Button className="md:h-[40px] md:w-[300px]"
                                fontSize="17px"
                                backgroundColor={colors.main}
                                fontColor={colors.white}
                                hoverBackgroundColor={colors.lightGrey}
                                onClick={() => router.push("/facades")}
                                padding="10px"
                                borderRadius="30px"
                                withArrow>
                            En savoir plus sur les façades
                        </Button>
                </div>
                <div className="flex flex-col items-center w-full">
                    <SubTitle>Algo Façade c'est aussi...</SubTitle>
                    <div
                        className="flex flex-col items-center justify-between w-[80%] space-y-10 md:flex-row md:space-y-0">
                        <OtherProduct name="Toitures" image={"/images/toitures.JPG"}/>
                        <OtherProduct name="Terrasses" image={"/images/terrasses.webp"}/>
                    </div>
                </div>
                <Faq/>
                <Contact/>
                <Footer/>
            </div>
        </div>
    );
};

type OtherProductProps = {
    name: string,
    image: string,
}

const OtherProduct = (props: OtherProductProps) => {
    const router: AppRouterInstance = useRouter();
    return (
        <div className="flex flex-col items-center w-full md:w-[45%]">
            <ImageCard borderRadius="10px"
                       image={props.image}
                       height="250px" width="100%">
                {props.name}
            </ImageCard>
            <Button
                backgroundColor={colors.grey}
                fontColor={colors.white}
                hoverBackgroundColor={colors.lightGrey}
                className="w-[225px] h-[30px] mt-[15px]"
                onClick={() => router.push("/"+props.name.toLowerCase())}
                withArrow>
                Nettoyage de {props.name.toLowerCase()}
            </Button>
        </div>
    );
}

export default Home;
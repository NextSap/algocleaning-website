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

const images: string[] = [
    "/images/photo-factice.jpeg",
    "/images/photo-factice.jpeg",
    "/images/photo-factice.jpeg",
];


const Home = () => {
    const router: AppRouterInstance = useRouter();
    return (
        <div>
            <Header/>
            <Slideshow images={images} height={"600px"}>
                <div className="flex flex-col justify-center items-center h-full w-full space-y-10">
                    <h1 className="text-white text-[40px] font-bold tracking-wide text-center">Entretien professionnel de
                        façades</h1>
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
                    <DescriptionCard description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cupiditate, distinctio ducimus exercitationem itaque necessitatibus perspiciatis totam vero? Assumenda consectetur in modi sed similique voluptates."
                                     image={images[0]}
                                     imagePosition="left">
                        Pourquoi AlgoFacade ?
                    </DescriptionCard>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <SubTitle id="services" underline={"40px"}>Services</SubTitle>
                <ImageCard borderRadius="10px"
                           image={images[0]}
                           height="300px" width="80%">
                    Façades
                </ImageCard>
                <div className="flex flex-col justify-around items-center w-[80%] mt-8 mb-16 md:flex-row">
                    <p className="w-full text-xl text-dark mb-5 md:w-[45%] md:mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur culpa ducimus harum
                        impedit, odit officia, placeat porro quae quasi reprehenderit sapiente sint sunt unde.
                    </p>
                    <Button className="h-[40px] w-[300px]"
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
                    <SubTitle>AlgoFacade c'est aussi...</SubTitle>
                    <div
                        className="flex flex-col items-center justify-between w-[80%] space-y-10 md:flex-row md:space-y-0">
                        <OtherProduct name="Toitures" image={images[0]}/>
                        <OtherProduct name="Terrasses" image={images[0]}/>
                    </div>
                </div>
                <Faq/>
                <Contact/>
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
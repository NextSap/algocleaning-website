import React from 'react';
import SubTitle from "@/components/SubTitle";
import Data from "../../public/Data.json";
import {FAQType} from "@/utils/type";
import Collapse from "@/components/Collapse";

const Faq = () => {
    return (
        <div className="flex flex-col items-center w-full mt-16">
            <SubTitle underline="150px">Les questions les plus posées</SubTitle>
            {Data.faq.map((faq: FAQType, index:number) => {
                return (
                    <Collapse key={index} content={faq.answer}>{faq.question}</Collapse>
                );
            })}
        </div>
    );
};

export default Faq;
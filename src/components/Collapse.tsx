import React, {useState} from 'react';
import Data from "../../public/Data.json";

type CollapseProps = {
    children: string;
    content: string;
}

const Collapse = (props: CollapseProps) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-[90%] mb-5 md:w-[70%]">
            <button onClick={() => setOpen(!open)} className="flex w-full">
                <span style={{fontWeight: 500}} className="flex justify-between items-center w-full text-dark py-3 text-[18px] text-left">
                    {props.children}
                    <img style={{transform: open ? "rotate(0deg)" : "rotate(180deg)", height: "15px", marginLeft: "50px"}}
                         alt="Flèche" src={Data.blackarrow}
                    className="transition-all duration-300"/>
                </span>
            </button>
            <div className={`${open ? 'max-h-[1000px]': 'max-h-0'} transition-all duration-300 overflow-hidden w-full border-b border-b-grey`}>
                <p className="text-grey py-3 text-[15px]">{props.content}</p>
            </div>
        </div>
    );
};

export default Collapse;
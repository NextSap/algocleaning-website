import React, {useState} from 'react';

type CollapseProps = {
    children: string;
    content: string;
}

const Collapse = (props: CollapseProps) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-[90%] mb-5 md:w-[70%]">
            <button onClick={() => setOpen(!open)} className="flex justify-center w-full">
                <span style={{fontWeight: 500}} className="flex justify-between items-center w-full text-dark py-3 text-[18px]">
                    {props.children}
                    <img style={{transform: open ? "rotate(0deg)" : "rotate(180deg)", height: "15px"}}
                         alt="Flèche" src="/images/BlackArrow.png"
                    className="transition-all duration-300"/>
                </span>
            </button>
            <div className={`${open ? 'max-h-32' : 'max-h-0'} transition-all duration-300 overflow-hidden w-full border-b border-b-grey`}>
                <p className="text-grey py-3 text-[15px]">{props.content}</p>
            </div>
        </div>
    );
};

export default Collapse;
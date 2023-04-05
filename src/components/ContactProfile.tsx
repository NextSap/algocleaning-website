import React from 'react';

type ContactProfileProps = {
    children: string;
    phone: string;
    image: string;
}

const ContactProfile = (props: ContactProfileProps) => {
    return (
        <div className="flex flex-col items-center w-42">
            <img src={props.image} alt={"Image de "+props.children} className="w-0 h-0 rounded-full object-cover bg-lightGrey" />
            <h3 className="text-xl text-center font-semibold text-dark mt-3">{props.children}</h3>
            <p className="text-[13px] text-center text-darkGrey">{props.phone}</p>
        </div>
    );
};

export default ContactProfile;
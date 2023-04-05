import React, {useEffect} from 'react';
import ReactPlayer from "react-player";
import dynamic from 'next/dynamic';

type VideoDescriptionCard = {
    children: string;
    video: string;
}

const VideoDescriptionCard = (props: VideoDescriptionCard) => {
    const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

    return (
        <div className={"flex flex-col w-full items-center h-auto"}>
            <h2 className="text-[28px] font-semibold text-dark mb-5 lg:mt-0 lg:mb-0">{props.children}</h2>
            <div className="h-auto md:h-[300px]">
                <ReactPlayer
                    loop={true}
                    playing={true}
                    muted={true}
                    width={"100%"}
                    height={"100%"}
                    url={props.video}
                />
            </div>
        </div>
    );
};

export default VideoDescriptionCard;
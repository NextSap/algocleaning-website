import React from 'react';
import YouTube, {YouTubeEvent} from 'react-youtube';

type VideoDescriptionCard = {
    children: string;
    video: string;
}

const opts = {
    height: '300',
    width: '100%',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        loop: 1,
    },
};

const VideoDescriptionCard = (props: VideoDescriptionCard) => {

    return (
        <div className={"flex flex-col w-full items-center h-auto"}>
            <h2 className="text-[28px] font-semibold text-dark mb-5 lg:mt-0 lg:mb-0">{props.children}</h2>
            <div className="h-auto md:h-[300px]">
                <YouTube
                    videoId={props.video}
                    opts={opts}
                    onReady={onReady}
                    />
            </div>
        </div>
    );
};

function onReady(event: YouTubeEvent<number>) {
    event.target.setVolume(0);
    event.target.playVideo();
}

export default VideoDescriptionCard;
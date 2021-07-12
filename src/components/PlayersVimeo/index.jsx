import React from 'react';
import ReactPlayer from 'react-player';


const PlayerVimeo = () => {
    return (
        <div>
            <ReactPlayer
                url="https://vimeo.com/512107029"
            />
            <ReactPlayer
            url="https://vimeo.com/518848904"
            />
            <ReactPlayer
            url="https://vimeo.com/514537816"
            />
        </div>
    );
}

export default PlayerVimeo;

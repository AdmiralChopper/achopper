import React from 'react';
import './styles.css';
import parseMasS from '../../utils/parseMinutesAsSeconds'

function JumpToTimeStamp(props) {

    async function handleClick(timestamp) {
        const skip = {event: 'command', func: 'seekTo', args: [parseMasS(timestamp), true]};
        const message = JSON.stringify(skip);
        document.getElementById('ytplayer').contentWindow.postMessage(message, '*');
    }
    
    if (props.timestamp) {
        return (
            <>
            <button id="jump-to-timestamp" onClick={() => handleClick(props.timestamp)}>{props.timestamp} <i className="fas fa-forward"></i></button>
            </>
        )

        } else {
            return (
                <>
                <p>LOADING</p>
                </>
            )
        }
}

export default JumpToTimeStamp;
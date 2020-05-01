import React from 'react';
import JumpToTimeStamp from '../JumpToStamp';
import './styles.css'

function Info(props) {
    if (props.quote !== undefined) {
    const { quote, character, playedby, timestamp } = props.quote;
    
    return (
        <>
        <p>QUOTE <br /> <span className="text-content">{quote}</span></p>
        { playedby !== '' && <p>CHARACTER <br /> <span className="text-content">{character}</span></p> }
        { playedby === '' && <p>WHO <br /> <span className="text-content">{character}</span></p> }
        { playedby !== '' && <p>PLAYED BY <br /> <span className="text-content">{playedby}</span></p> }
        <p>TIMESTAMP <br /> {<JumpToTimeStamp timestamp={timestamp} currentUrl={props.currentUrl} setUrl={props.setUrl} />}</p>
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

export default Info;
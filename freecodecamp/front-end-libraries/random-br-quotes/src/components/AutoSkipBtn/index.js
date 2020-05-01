import React from 'react';
import './styles.css';

function AutoSkip(props) {

    async function handleClick() {
        props.setAutoSkip(!props.autoSkip);
    }
    
        return (
            <>
            <span className="autoskip">
                AUTOSKIP: 
                {props.autoSkip === false && <button className="toggle-autoskip toggle-off" onClick={() => handleClick()}><i className="fas fa-circle"></i></button>}
                {props.autoSkip === true && <button className="toggle-autoskip toggle-on" onClick={() => handleClick()}><i className="fas fa-circle"></i></button>}
            </span>
            </>
        )

}

export default AutoSkip;
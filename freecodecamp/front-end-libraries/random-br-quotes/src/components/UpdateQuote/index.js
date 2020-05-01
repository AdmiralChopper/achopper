import React from 'react';
import './styles.css';

function UpdateButton(props) {
    function handleClick() {
        props.setIdx((props.currentIdx+1) % props.quotes.length);
    }
    


    return (
        <>
        <button id="update-quote" onClick={handleClick}>New Quote</button>
        </>
    )
}

export default UpdateButton;
const parseSecondsAsMinutes = (seconds) => {
    return (
    `${`${Math.floor(seconds/60)}`.length<2? `0${Math.floor(seconds/60)}` : `${Math.floor(seconds/60)}`}:${`${seconds%60}`.length<2? `0${seconds%60}`:`${seconds%60}`}`
    )
}

export default parseSecondsAsMinutes;
function parseMasS(str) {
    if (typeof str==="string") {
    let arr = str.split(":");
    let seconds = parseInt(arr[0])*60 + parseInt(arr[1]);
    return seconds;
    } else {
        return 0;
    }
}

export default parseMasS
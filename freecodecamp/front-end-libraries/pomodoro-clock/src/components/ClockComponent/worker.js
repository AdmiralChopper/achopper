export default () => {
    let ID = 0;
    /* eslint-disable-next-line no-restricted-globals */
    self.addEventListener('message', function(msg) {
        if (msg.data === "START") {
            if (ID!==0) {
                clearInterval(ID);
            }
            const intervalID = startClock();
            ID = intervalID;
        } else if (msg.data === "STOP") {
            stopClock(ID);
        }


}, false);

    const sendUpdateMessage = () => {
        /* eslint-disable-next-line no-restricted-globals */
        self.postMessage("update")
    }

    const startClock = () => {
        const intervalID = setInterval(sendUpdateMessage, 1000);
        return intervalID;
    }

    const stopClock = (id) => {
        clearInterval(id);
    }
}
function randomizeArray(data) {
    for (let i=data.quotes.length-1;i>0;i--) {
        let j = Math.floor(Math.random() * i)
        let aux = data.quotes[i];
        data.quotes[i] = data.quotes[j];
        data.quotes[j] = aux;
    }
    return (data.quotes);
}

module.exports = randomizeArray
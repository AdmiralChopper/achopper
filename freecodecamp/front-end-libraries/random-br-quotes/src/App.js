import React, { useEffect, useState } from 'react';
import './Global.css';
import './App.css';
import Info from './components/Info/';
import UpdateButton from './components/UpdateQuote';
import AutoSkip from './components/AutoSkipBtn';
import ShowVideo from './components/VideoDisplay';


function App() {
  const [quotes, setQuotes] = useState([]);
  const [currentIdx, setIdx] = useState([]);
  const [currentUrl, setUrl] = useState([]);
  const [autoSkip, setAutoSkip] = useState(false);

  useEffect(() => {
    async function getQuotes() { 
      fetch("https://us-central1-greatmomentsofbrdramaturgyapi.cloudfunctions.net/app/quotes").then( res => res.json()).then(quotes => {setQuotes(quotes); setIdx(0)});
    }
    document.title = "Awesome Random BR TV Quotes";
    getQuotes();

  }, [])

  useEffect(() => {
    if(typeof currentIdx === 'number') {
      setUrl(`${quotes[currentIdx].ytUrl}`);
    }
  }, [currentIdx, quotes]);

  return (
    <div className="App">
      <h1 className="title">Awesome Random Quotes from Brazillian Television!</h1>
      <div className="content-wrapper">
      <div className="menu">
        <Info quote={quotes[currentIdx]} currentUrl={currentUrl} setUrl={setUrl}/>
        <AutoSkip autoSkip={autoSkip} setAutoSkip={setAutoSkip} />
        <UpdateButton currentIdx={currentIdx} setIdx={setIdx} quotes={quotes}/>
      </div>
      
      <div className="video-wrapper">
      <ShowVideo ytUrl={currentUrl}  autoSkip={autoSkip} timestamp={quotes[currentIdx] !== undefined ? quotes[currentIdx]["timestamp"] : 0} />
      </div>
      </div>
      <footer className="footer">Created by <a rel="noopener noreferrer" target="_blank" href="https://github.com/admiralchopper">Carlos Castro</a></footer>
      
    </div>
  );
};

export default App;

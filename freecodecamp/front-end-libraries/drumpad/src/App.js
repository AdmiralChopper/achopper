import React from 'react';
import './App.css';

class DrumButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  playAudio() {
    let audio =  document.getElementById(this.props.ID);
    let memeNameDisplay = document.getElementById("display");
    let memeLinksDisplay = document.getElementById("links");
    memeNameDisplay.innerText = this.props.memeName;
    memeLinksDisplay.innerHTML = `<a target="_blank" href="`+this.props.ytUrl+`"><i class="fab fa-youtube"></i></a>`;
    if (this.props.currentAudio==null) {
    this.props.setAudio(audio);
    audio.play();
    }
    else {
      this.props.currentAudio.pause();
      this.props.currentAudio.currentTime=0;
      this.props.setAudio(audio);
      audio.play();
    }}


  handleClick(event) {
    event.preventDefault();
    this.playAudio();
  }
  
  render() {
  return (
  <button onClick={this.handleClick} className='drum-pad' id={`${this.props.ID}-btn`} style={{backgroundImage: `url(${this.props.imgUrl})`, backgroundSize: 'cover'}}>{this.props.text}<audio src={this.props.sndUrl} className="clip" id={this.props.ID} /></button>
)
}
}

const Display = props => {
  return (
    <div className="description">
      <h2 className="title" id="title">BR MemePad</h2>
  <p className="memeDesc" id="display">Click on a meme</p>
  <div id="links"></div>
      <footer className="footer" id="footer">By <a target="_blank" rel="noopener noreferrer" href="http://github.com/admiralchopper">Carlos Castro</a><br />Audio: <a target="_blank" rel="noopener noreferrer" href="https://blerp.com/">Blerp</a> / <a target="_blank" rel="noopener noreferrer" href="https://myinstants.com">MyInstants</a></footer>
    </div>)
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAudio: null
    }
    this.setCurrentAudio = this.setCurrentAudio.bind(this);
  }
  async setCurrentAudio(audio) {
    await this.setState({currentAudio: audio});
  }
 
  handleKeyUp(event) {
    event.preventDefault();
    let el = document.getElementById(`${event.key.toUpperCase()}-btn`)
    if (el!=null) {
      el.classList.toggle("button-active");
    }
  } 
  handleKeyPress(event) {
    event.preventDefault();
        let el = document.getElementById(`${event.key.toUpperCase()}-btn`);
    if (el!=null) {
      el.click();
      el.classList.add("button-active");
    }
    }
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
    document.addEventListener('keyup', this.handleKeyUp);
  }
 

  render() {
    const keyList = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
    const memes = [
      {memeName: "Jailson Mendes",
       sndUrl: "https://audio.blerp.com/audio/d02f2c00-8d60-11e9-9016-8b78caf46556?type=MP3",
       imgUrl: "https://img.r7.com/images/e-farsas-hora-7-30062018205522761?dimensions=600x315&crop_position=c",
      ytUrl: "https://www.youtube.com/watch?v=Q8bbxDdJk9U"},
      {memeName: "Jacquin Puto",
       sndUrl: "https://audio.blerp.com/audio/82f67a40-03fa-11ea-b5c2-11fa6de36257?type=MP3",
       imgUrl: "https://s.yimg.com/ny/api/res/1.2/BlTvS_Sk593hrk3PSP_JOQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-10/6ce48cf0-f776-11e9-97ff-c75df7b247c8",
      ytUrl: "https://www.youtube.com/watch?v=fGWbzR0Rtts"},
      {memeName: "Uoooooo Porra",
       sndUrl: "https://audio.blerp.com/audio/f63dc290-8d55-11e9-9016-8b78caf46556?type=MP3",
       imgUrl: "https://i.ytimg.com/vi/2o_BKc5u-J8/hqdefault.jpg",
      ytUrl: "https://www.youtube.com/watch?v=7vmtht4LDa8"},
      {memeName: "Chico Bioca",
       sndUrl: "https://audio.blerp.com/audio/1e9266a0-8d4d-11e9-9016-8b78caf46556?type=MP3",
       imgUrl: "https://i.ytimg.com/vi/BHnEHhRY6FI/maxresdefault.jpg",
      ytUrl: "https://www.youtube.com/watch?v=k-elkN2noT8"},
      {memeName: "Choque na uva",
       sndUrl: "https://audio.blerp.com/audio/92b968d0-8d52-11e9-9016-8b78caf46556?type=MP3",
       imgUrl: "https://i.ytimg.com/vi/U9CXtycJz_g/hqdefault.jpg",
      ytUrl: "https://www.youtube.com/watch?v=U9CXtycJz_g"},
      {memeName: "Tu é gay mano?",
       sndUrl: "https://www.myinstants.com/media/sounds/tu-eh-gay-mano.mp3",
       imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRF2L3c1plcNHZr0FEJBK9vOfR0nrWRamCye4cbGUzBE-_EGryt&usqp=CAU",
      ytUrl: "https://www.youtube.com/watch?v=eNT6mTxKwWg"},
      {memeName: "Sai filho da puta",
       sndUrl: "https://www.myinstants.com/media/sounds/bam_bam.mp3",
       imgUrl: "https://images.uncyc.org/pt/thumb/d/d6/Felipecareta.jpg/1200px-Felipecareta.jpg",
      ytUrl: "https://www.youtube.com/watch?v=lszSpQDqqNk"},
      {memeName: "Some daqui meu",
       sndUrl: "https://www.myinstants.com/media/sounds/some-daqui_n8gVwPW.mp3",
       imgUrl: "https://i.ytimg.com/vi/iAAtZYcg1_U/hqdefault.jpg",
      ytUrl: "https://www.youtube.com/watch?v=0imw_ItLffs"},
      {memeName: "Felipe Smith",
       sndUrl: "https://www.myinstants.com/media/sounds/jarbas.mp3",
       imgUrl: "https://i.ytimg.com/vi/mp1A3_nUwJ8/maxresdefault.jpg",
      ytUrl: "https://www.youtube.com/watch?v=IBFIbRM1gEc"},  
    ];
    
    const buttons = <div id="drum-keys"> {keyList.map((key, idx) => 
    <DrumButton memeName={memes[idx].memeName} sndUrl={memes[idx].sndUrl} imgUrl={memes[idx].imgUrl} ytUrl = {memes[idx].ytUrl} text={key} key={key} ID={key} setAudio={this.setCurrentAudio} currentAudio={this.state.currentAudio}/>)} </div>;
    return (<> {buttons} <Display /> </>
    );
  }
  }
  export default App;

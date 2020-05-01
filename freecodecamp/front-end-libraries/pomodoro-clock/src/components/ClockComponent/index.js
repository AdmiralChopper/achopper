import React from 'react';
import {SESSION_CLOCK, BREAK_CLOCK} from '../../constants/constants'
import parseSecondsAsMinutes from '../../utils/parseSecondsAsMinutes'
import './styles.css'
import worker from './worker';
import WebWorker from './WorkerSetup';
import buzz from '../../assets/buzz.mp3';

class ClockComponent extends React.Component {
    constructor(props) {
      super(props);
      this.handlePlay = this.handlePlay.bind(this);
      this.handlePause = this.handlePause.bind(this);
      this.updateClock = this.updateClock.bind(this);
      this.buzz = this.buzz.bind(this);
      this.handleReset = this.handleReset.bind(this);
    }

    componentDidMount() {
      this.intervalWorker = new WebWorker(worker);
      this.intervalWorker.updateClock = this.updateClock;
      this.intervalWorker.onmessage = function(msg) {
        if (msg.data === 'update') {
          this.updateClock();
        }
      }
    }
    
    buzz() {
      const audio = document.getElementById('beep');
      audio.play();
    }
    
    updateClock() {
      if (this.props.isRunning) { 
        this.props.updateClock();
      }

      if (this.props.currentClock === SESSION_CLOCK) {
        if (this.props.currentSessionTimer === 0) {
          this.buzz();
        }
      }
      if (this.props.currentClock === BREAK_CLOCK) {
        if (this.props.currentBreakTimer === 0) {
          this.buzz();
        }
      }
    }
    
    handlePlay() {
      this.props.changeState();
      this.intervalWorker.postMessage('START');
    }
    
    handlePause() {
      this.props.changeState();
      this.intervalWorker.postMessage('STOP');
    }
    
    handleReset() {
      const audio = document.getElementById('beep');
      audio.pause();
      audio.currentTime = 0;
      this.props.reset();
    }
    
    renderTimeLeft() {
      if (this.props.currentClock === SESSION_CLOCK) {
        return (
        parseSecondsAsMinutes(this.props.currentSessionTimer))
      } else {
        return (
        parseSecondsAsMinutes(this.props.currentBreakTimer)
        )
      }
    }
    
    render () {
      return (
        <>
        <div className="menu-wrapper">
          <h2 className="label" id="title">Minimal Pomodoro</h2>
          <h3 id="timer-label">{this.props.currentClock}</h3>
          <h3 id="time-left">{this.renderTimeLeft()}</h3>
        <div className="clock-buttons">
          {this.props.isRunning && <button id="start_stop" onClick={this.handlePause}><i className="fas fa-pause"></i></button>}
          {!this.props.isRunning && <button id="start_stop" onClick={this.handlePlay}><i className="fas fa-play"></i></button>}
          <button id="reset" onClick={this.handleReset}><i className="fas fa-redo"></i></button>
          </div>
          <footer id="footer">by <a target="_blank" rel="noopener noreferrer" href="http://github.com/admiralchopper">Carlos Castro</a></footer>
          </div>
        <audio preload="auto" id="beep" type="audio/mp3" src={buzz} />
        </>
      )
    }
  }

export default ClockComponent;
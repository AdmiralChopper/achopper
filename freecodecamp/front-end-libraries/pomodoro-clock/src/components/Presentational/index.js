import React from 'react';
import {connect} from 'react-redux';
import ClockComponent from '../ClockComponent'
import {mapStateToProps, mapDispatchToProps} from '../../react-redux-maps/maps';
import './styles.css'

const Clock = connect(mapStateToProps, mapDispatchToProps)(ClockComponent);

class Presentational extends React.Component {
 
    render() {
      return (
        <div className="main-container">
          <Clock />
          <div className="menu-wrapper">
            
          <div className="menu">
            <h2 className="label" id="session-label">SESSION LENGTH</h2>
            <div className="buttons-wrapper">
              <button id="session-decrement" onClick={this.props.decreaseSession}><i className="fas fa-minus"/></button>
              <div id="session-length">{this.props.sessionTime}</div>
              <button id="session-increment" onClick={this.props.increaseSession}><i className="fas fa-plus"/></button>
            </div>
          </div>
            
          <div className="menu">
            <h2 className="label" id="break-label">BREAK LENGTH</h2>
            <div className="buttons-wrapper">
              <button id="break-decrement" onClick={this.props.decreaseBreak}><i className="fas fa-minus"/></button>
              <div id="break-length">{this.props.breakTime}</div>
              <button id="break-increment" onClick={this.props.increaseBreak}><i className="fas fa-plus"/></button>
            </div>
          </div>
          </div>
        </div>
      )
      
      }
}

export default Presentational;
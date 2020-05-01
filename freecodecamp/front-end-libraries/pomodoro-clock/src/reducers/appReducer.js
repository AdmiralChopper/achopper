import nextMinute from '../utils/nextMinute';
import previousMinute from '../utils/previousMinute';
import {STATE_CHANGE, CLOCK_CHANGE, INCREASE_SESSION, DECREASE_SESSION, INCREASE_BREAK, DECREASE_BREAK, SESSION_CLOCK, BREAK_CLOCK,
     INITIAL_STATE, RESET, UPDATE_CLOCK} from '../constants/constants'

const appReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case STATE_CHANGE: 
        return Object.assign({}, state, {isRunning: !state.isRunning})
      case CLOCK_CHANGE:
        if (state.currentClock === SESSION_CLOCK) {
          return Object.assign({}, state, {currentClock: BREAK_CLOCK})
        } else {
          return Object.assign({}, state, {currentClock: SESSION_CLOCK})
        }
      case INCREASE_SESSION:
        if (!state.isRunning){
          const nextSessionTime = nextMinute(state.sessionTime) > 60 ? 60 : nextMinute(state.sessionTime);
          return Object.assign({}, state, {sessionTime: nextSessionTime, currentSessionTimer: nextSessionTime*60})
        }
        break;
      case DECREASE_SESSION: 
        if (!state.isRunning){
          const nextSessionTime = previousMinute(state.sessionTime) <= 0 ? 1 : previousMinute(state.sessionTime);
          return Object.assign({}, state, {sessionTime: nextSessionTime, currentSessionTimer: nextSessionTime*60})
        }
        break;
      case INCREASE_BREAK:  
        if (!state.isRunning){
          const nextBreakTime = nextMinute(state.breakTime) > 60 ? 60 : nextMinute(state.breakTime);
          return Object.assign({}, state, {breakTime: nextBreakTime, currentBreakTimer: nextBreakTime*60})
        }
        break;
      case DECREASE_BREAK: 
        if (!state.isRunning){
          const nextBreakTime = previousMinute(state.breakTime) <= 0 ? 1 : previousMinute(state.breakTime);
          return Object.assign({}, state, {breakTime: nextBreakTime, currentBreakTimer: nextBreakTime*60})
        }
        break;
      case UPDATE_CLOCK:
          if (state.isRunning) {
            if (state.currentClock === SESSION_CLOCK) {
              const update = state.currentSessionTimer-1;
              if (update === 0) {
                return Object.assign({}, state, {currentSessionTimer: 0})
              } else if (update<0) {
                return Object.assign({}, state, {currentClock: BREAK_CLOCK, currentBreakTimer: state.breakTime*60});
              } else {
              return Object.assign({}, state, {currentSessionTimer: update})
              }
            } else {
              const update = state.currentBreakTimer-1;
              if (update === 0) {
                return Object.assign({}, state, { currentBreakTimer: 0})
              } else if (update<0) {
                return Object.assign({}, state, { currentClock: SESSION_CLOCK, currentSessionTimer: state.sessionTime*60});
              } else {
              return Object.assign({}, state, {currentBreakTimer: update})
              }
            }
                
          } else {
          return state;
        }
      case RESET:
        return Object.assign({}, state, INITIAL_STATE);
      default:
        return state;
    }
    return state;
  }

  export default appReducer;
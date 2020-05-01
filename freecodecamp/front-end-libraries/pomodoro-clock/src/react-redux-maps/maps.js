import * as actions from '../redux-actions/actions'

export const mapStateToProps = (state) => {
    return {
      currentClock: state.currentClock,
      isRunning: state.isRunning,
      sessionTime: state.sessionTime,
      breakTime: state.breakTime,
      currentSessionTimer: state.currentSessionTimer,
      currentBreakTimer: state.currentBreakTimer,
    }
  }
  
export const mapDispatchToProps = (dispatch) => {
    return {
      changeState: () => {
        dispatch(actions.changeState());
      },
      changeClock: () => {
        dispatch(actions.changeClock());
      },
      increaseSession: () => {
        dispatch(actions.increaseSession());
      },
      decreaseSession: () => {
        dispatch(actions.decreaseSession());
      },
      increaseBreak: () => {
        dispatch(actions.increaseBreak());
      },
      decreaseBreak: () => {
        dispatch(actions.decreaseBreak());
      },
      updateClock: () => {
        dispatch(actions.updateClock());
      },
      reset: () => {
        dispatch(actions.reset());
      }
    }
  }
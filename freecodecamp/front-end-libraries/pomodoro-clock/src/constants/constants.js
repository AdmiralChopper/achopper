export const STATE_CHANGE = 'STATE_CHANGE';
export const CLOCK_CHANGE = 'CLOCK_CHANGE';
export const INCREASE_SESSION = 'INCREASE_SESSION';
export const DECREASE_SESSION = 'DECREASE_SESSION';
export const INCREASE_BREAK = 'INCREASE_BREAK';
export const DECREASE_BREAK = 'DECREASE_BREAK';
export const SESSION_CLOCK = 'SESSION';
export const BREAK_CLOCK = 'BREAK';
export const INITIAL_SESSION = 30;
export const INITIAL_BREAK = 5;
export const RESET = 'RESET';
export const UPDATE_CLOCK = 'UPDATE_CLOCK';

export const INITIAL_STATE = {
  currentClock: SESSION_CLOCK,
  isRunning: false,
  sessionTime: INITIAL_SESSION,
  breakTime: INITIAL_BREAK,
  currentSessionTimer: INITIAL_SESSION*60,
  currentBreakTimer: INITIAL_BREAK*60,
}
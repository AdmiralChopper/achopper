import * as constants from '../constants/constants'

export const changeState = () => {return {type: constants.STATE_CHANGE}};
export const changeClock = () => {return {type: constants.CLOCK_CHANGE}};
export const increaseSession = () => {return {type: constants.INCREASE_SESSION}};
export const decreaseSession = () => {return {type: constants.DECREASE_SESSION}};
export const increaseBreak = () => {return {type: constants.INCREASE_BREAK}};
export const decreaseBreak = () => {return {type: constants.DECREASE_BREAK}};
export const updateClock = () => {return {type: constants.UPDATE_CLOCK}};
export const reset = () => {return {type: constants.RESET}};
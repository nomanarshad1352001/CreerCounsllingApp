import { combineReducers } from "redux";
import colleges from './colleges';
import degrees from './degrees';

export default combineReducers({ colleges, degrees });
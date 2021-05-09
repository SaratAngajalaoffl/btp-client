import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducer from './rootreducer';
import thunk from 'redux-thunk';

export default createStore(reducer, applyMiddleware(logger, thunk));

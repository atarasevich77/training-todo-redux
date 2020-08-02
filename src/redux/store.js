import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {todos} from './reducer';

export const store = createStore(
    todos,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);
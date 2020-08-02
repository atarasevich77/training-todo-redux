import React from 'react';

const initialStore = {
    errors: [],
    todos: [
        {name: 'First', done: false},
        {name: 'Second', done: false},
        {name: 'Third', done: true},
    ]
};

export const todos = (state = initialStore, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {...state,
                todos: [...state.todos, {name: action.payload, done: false}]
            }
        case 'STATUS_CHANGE':
            const updatedStatus = state.todos.map((el, index) => {
                if(index === action.payload){
                    return {...el, done: !el.done}
                }
                return el;
            });
            return {...state,
                todos: updatedStatus
            }
        case 'DELETE_TODO':
            const newState = state.todos.filter((el, index) => index !== action.payload);
            return {...state,
                todos: newState
            }
        default:
            return state;
    }
}

import React from 'react';
import {connect} from "react-redux";

const ListTodo = (props) => {

    const onDelete = (idx) => {
        props.deleteTodo(idx);
    }

    const onStatusChange = (idx) => {
        props.statusChange(idx);
    }

    return (
        <ul>
            {
                props.todos.map((el, index) =>
                    <li key={index}>
                        <span>{el.done ? '✅' : ''}</span>
                        <button onClick={()=>onStatusChange(index)}>{el.done ? 'UnDone' : 'Done'}</button>
                        {el.name}
                        <button onClick={()=>onDelete(index)}>Delete</button>
                    </li>
                )
            }
        </ul>
    );
};

const mapStoreToProps = (state) => ({
    todos: state.todos,
    errors: state.errors
})

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (idx) => dispatch({type: 'DELETE_TODO', payload: idx}),
        statusChange: (idx) => dispatch({type: 'STATUS_CHANGE', payload: idx}),
    }

}

export default connect(mapStoreToProps, mapDispatchToProps)(ListTodo);
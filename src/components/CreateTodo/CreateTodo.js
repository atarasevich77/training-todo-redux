import React, {useState} from 'react';
import {connect} from "react-redux";

const CreateTodo = (props) => {
    const [name, setName] = useState('');

    const onCreate = () => {
        props.addTodo(name);
        setName('')
    }

    return (
        <div>
            <input value={name} onChange={(e)=> setName(e.target.value)}/>
            <button onClick={onCreate}>Add</button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    addTodo: (name) => dispatch({type: 'ADD_TODO', payload: name})
})

export default connect(null, mapDispatchToProps)(CreateTodo);
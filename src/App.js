import React from 'react';
import ListTodo from "./components/ListTodo/ListTodo";
import CreateTodo from "./components/CreateTodo/CreateTodo";

function App() {
    return (
        <div>
            <h1>Hello ToDos:</h1>
            <CreateTodo />
            <ListTodo />
        </div>
    );
}
export default App;

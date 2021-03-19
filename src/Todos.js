import React from 'react';
import Todo from "./Todo"

function Todos(props) {
    return (
        <div className="todos">
            {props.todos.map((todo, index) => {
                return (
                    <Todo
                        key={index}
                        makeFavorite={props.makeFavorite}
                        deletedTodos={props.deletedTodos}
                        todo={todo}
                        index={index}/>
                    )
                })
            };
        </div>
    );
}

export default Todos;
import React from 'react';
import TodoItem from './TodoItem';
import '../styles/TodoList.scss';

function TodoList(){
    const todos = [
        {
            id : 1,
            text : "TypeScript 배우기",
            done : true
        },
        {
            id : 2,
            text : "블로그 글 쓰기",
            done : false
        },
        {
            id : 3,
            text : "맛있는 밥 먹기",
            done : false
        },
    ];
    return(
        <div className = "todoList">
            {
                todos.map(todo => (
                    <TodoItem todo = {todo} key = {todo.id} />
                ))
            }
        </div>
    )
}

export default TodoList;
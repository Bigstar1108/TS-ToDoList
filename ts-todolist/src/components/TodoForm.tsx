import React, { useState } from 'react';
import '../styles/TodoForm.scss';

function TodoForm(){
    const [value, setValue] = useState('');

    const onSubmit = (e : React.FormEvent) => {
        e.preventDefault();
        //ToDO : 새 항목 생성하기
        setValue('');
    }

    return(
        <form onSubmit = {onSubmit} className = "todoForm">
            <input
                value = {value}
                placeholder = "무엇을 하실 건가요??"
                onChange = {e => setValue(e.target.value)}
            />
            <button>등록</button>
        </form>
    );
};

export default TodoForm;
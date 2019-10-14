import React, {useState, useCallback} from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(       //onClick함수로 처리 가능, onSubmit은 Enter을 누르면 감지한다. onClick은 onkeyPress를 통해서 Enter를 감지한다
        e => {
            onInsert (value);
            setValue('');   //value값 초기화

            //submit 이벤트가 브라우저 새로고침 발생시킴 => 
            //e.preventDefault() 함수호출로 브라우저 새로고침 방지
            e.preventDefault();
        },
        [onInsert, value],
    );

    return (
        <form className = "TodoInsert" onSubmit = {onSubmit}>
            <input placeholder = "할 일을 입력하세요"
                value = {value}
                onChange = {onChange}
             />
            <button type = "submit">
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;

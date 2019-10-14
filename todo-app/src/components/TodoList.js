import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
	const rowRenderer = useCallback(
		({ index, key, style }) => {
			const todo = todos[index];
			return (
				<TodoListItem
					todo={todo}
					key={key}
					onRemove={onRemove}
					onToggle={onToggle}
					style={style}
				/>
			);
		},
		[onRemove, onToggle, todos],
	);

	return (
		<List
			className="TodoList"
			width={512} //전체크기
			height={513} //전체높이
			rowCount={todos.length}
			rowHeight={57}
			rowRenderer={rowRenderer}
			list={todos}
			style={{ outline: 'none' }} //List에 기본 적용되는 outline 스타일 제거
		/>
	);
};

export default React.memo(TodoList);
//TodoList는 리렌더링을 하지 않지만 App에서 state를 추가해서 해당
//값들이 업데이트 될 때 TodoList 컴포넌트가 불필요한 리렌더링을 할 수 있다.

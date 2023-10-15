import TodoItem from './TodoItem'
import {useRef} from 'react'

export default function TodoList({list, toggleTodo, deleteTodo, setTodoList}) {

	const dragItem = useRef();
	const dragOverItem = useRef();

  const dragStart = (e, position) => {
    dragItem.current = position;
  };

	const dragEnter = (e, position) => {
    dragOverItem.current = position;
  };

	const drop = (e) => {
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setTodoList(copyListItems);
  };

	const todoItems = list.map((item, index) =>
			<TodoItem key={item.id} todo={item} toggleTodo={toggleTodo} deleteTodo={deleteTodo} dragStart={dragStart} dragEnter={dragEnter} drop={drop} index={index}/>
	)

	return (
		<>
			<ul>
				{todoItems}
			</ul>
		</>
	)
}
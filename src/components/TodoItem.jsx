import { useState } from 'react'
import crossIcon from '../images/icon-cross.svg'

export default function TodoItem({todo, toggleTodo, deleteTodo, index, dragStart, dragEnter, drop}) {
	const [isChecked, setIsChecked] = useState(todo.completed)

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked)
		toggleTodo(todo.id)
	}

	return (
		<li className="todo-item" onDragStart={(e) => dragStart(e, index)} onDragEnter={(e) => dragEnter(e, index)} onDragEnd={drop} onDragOver={e => e.preventDefault()} draggable>
			<label className='todo-label' htmlFor={`todo_${todo.id}`}>
				<input checked={isChecked} onChange={handleCheckboxChange} className='checkbox' type="checkbox" id={`todo_${todo.id}`}/>
				<span className='todo-text'>{todo.text}</span>
			</label>
			<button onClick={() => deleteTodo(todo.id)} className='todo-delete'><img  className='delete-img' src={crossIcon} alt="delete todo" /></button>
		</li>	
	)
}
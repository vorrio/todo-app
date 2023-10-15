import {useState} from 'react'

export default function TodoInput({addTodo}) {
	const [isNewTodoCompleted, setIsNewTodoCompleted] = useState(false);
	const [newTodoValue, setNewTodoValue] = useState('')

	const handleAddTodo = (e) => {
		e.preventDefault()
		addTodo({
			id: Date.now(), 
			text: newTodoValue,
			completed: isNewTodoCompleted
		})
	}

	return (
		<>
		<form className='todo-input-container' onSubmit={handleAddTodo}>
			<input className='checkbox' checked={isNewTodoCompleted} onChange={() => setIsNewTodoCompleted(!isNewTodoCompleted)} type="checkbox" id="todo-input-checkbox"/>
			<input className='todo-input' value={newTodoValue} onChange={(e) => setNewTodoValue(e.target.value)} type="text" placeholder='Create a new todo...' name='todo input' autoFocus required/>
		</form>
		</>
	)
}
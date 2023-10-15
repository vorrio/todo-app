import { useState } from 'react'
import TodoList from './TodoList'
import TodoInput from './TodoInput'
import useLocalStorage from '../hooks/useLocalStorage';

export default function Todo() {

	const [todoList, setTodoList] = useLocalStorage('todoList', [
	{id: 1, text: "Complete online JavaScript	course", completed: true}, 
	{id: 2, text: "Jag around the park 3x", completed: false}, 
	{id: 3, text: "10 minutes meditation", completed: false},
	{id: 4, text: "Read for 1 hour", completed: false}, 
	{id: 5, text: "Pick up groceries", completed: false},
	{id: 6, text: "Complete Todo App on Forntend Mentor", completed: false}
	]);

	const [filterType, setFilterType] = useState('all')
	const filteredTodoList = (filterType === "all") ? todoList 
		: todoList.filter(todo => {
			if(filterType === "completed") {
				return todo.completed
			} else {
				return !todo.completed
			}
		});

	const itemsLeft = todoList.filter(todo => !todo.completed).length;

	const toggleTodo = (id) => {
		setTodoList(todoList.map(todo => (
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )))
	}

	const deleteTodo = (id) => {
		setTodoList(todoList.filter( todo => todo.id !== id))
	}

	const addTodo = (todo) => {
		setTodoList([...todoList, todo])
	}

	return (
		<>
			<TodoInput addTodo={addTodo}/>
			<div className="todo-content">
				<div className='todos'>
					<TodoList list={filteredTodoList} toggleTodo={toggleTodo} deleteTodo={deleteTodo} setTodoList={setTodoList}/>
				</div>
				<div className='todo-toolbar'>
					<p className='todos-left'>{itemsLeft} items left</p>
					<div className='filter-tools'>
						<button onClick={() => setFilterType('all')} className={`btn-filter ${(filterType === "all") ? 'active' : ''}`}>All</button>
						<button onClick={() => setFilterType('active')} className={`btn-filter ${(filterType === "active") ? 'active' : ''}`}>Active</button>
						<button onClick={() => setFilterType('completed')} className={`btn-filter ${(filterType === "completed") ? 'active' : ''}`}>Completed</button>
					</div>
					<button onClick={() => setTodoList(todoList.filter(todo => !todo.completed))} className='btn-clear'>Clear completed</button>
				</div>
			</div>

			<p className='text-drag-and-drop'>Drag and drop to reorder list</p>
		</>
	)
}
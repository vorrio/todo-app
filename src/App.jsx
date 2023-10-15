import { useState } from 'react'
import Todo from './components/Todo'
import Header from './components/Header'
import './App.css'

function App() {
	const [theme, setTheme] = useState('light')

	document.documentElement.setAttribute('data-theme', theme)

	const switchTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

  return (
    <>
			<div className='header-img'></div>
			<Header theme={theme} switchTheme={switchTheme}/>
			<main>
				<Todo />
			</main>
    </>
  )
}

export default App

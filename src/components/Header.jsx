import lightThemeIcon from '../images/icon-sun.svg'
import darkThemeIcon from '../images/icon-moon.svg'
 

export default function Header({theme, switchTheme}) {
	return (
		<>
		<header>
			{/* <img className='header-img' src={bgMobileLight} alt="background" /> */}
			<h1 className='header-title'>TODO</h1>
			<img onClick={switchTheme} className='theme-switch' src={theme === "dark" ? darkThemeIcon : lightThemeIcon} alt="toggle theme" />
		</header>
		</>
	)
}
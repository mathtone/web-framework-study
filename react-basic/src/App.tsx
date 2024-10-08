import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import bonesLogo from './assets/bones.svg'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={bonesLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<p className="read-the-docs">
				Welcome adventurer!
			</p>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
			</div>
			
		</>
	)
}

export default App
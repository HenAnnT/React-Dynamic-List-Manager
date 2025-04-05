import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
    return(
        <div>
            <header>
                <h1>Dynamic List Manager</h1>
            </header>
            <span>
                <input type="text" name="form" placeholder="Enter you items"/>
                <button type="submit">Add Item</button>
            </span>

            <form title="Dynamic List Manager">
            </form>
        </div>
    )
}

export default App

import './App.css'
import {useState} from "react";

const App = () => {
    const [entry, setEntry] = useState(""); // we set the initial state of the input to empty
    const [items, setItems] = useState([]); // we set the initial state of our form to blank

    const addItem = () => {
        if (entry.trim() !== "") { // if its not blank
            setItems([...items, entry]) // create an array of the entries of the user with (... is called spread operator)
            setEntry("") // resets the entry to allow for more entries.
        }
    }
    return(
        <div>
            <header>
                <h1 className="Dynamic-header">Dynamic List Manager</h1>
            </header>
            <span className="Dynamic-span">
                <input type="text" className="Dynamic-input" name="form" value={entry} onChange={(e) => setEntry(e.target.value)} placeholder="Enter you items"/>
                <button className="Dynamic-button" onClick={addItem}>Add Item</button>
            </span>

            {items.length > 0 && (
                <form className="Dynamic-form">
                    {/*<h2 className="Dynamic-title">List of Items</h2>*/}
                    <ul className="Dynamic-title">
                        {items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </form>
            )}
        </div>
    )
}

export default App
